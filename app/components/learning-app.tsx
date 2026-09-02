"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Bell, BookOpen, CalendarDays, Check, ChevronRight,
  Clipboard, ClipboardCheck, Copy, Eye, EyeOff, FileText, FolderOpen, GraduationCap,
  Home, Layers3, ListFilter, LockKeyhole, LogOut, Maximize2,
  Menu, MessageSquareText, Minimize2, Paperclip, Play, Search, Sparkles,
  X,
} from "lucide-react";
import { BrandMark } from "./brand-mark";
import { courseConfig } from "@/src/lectures/ai-design/full-ai-design-ad-content/course.config";
import { courseSlides } from "@/src/lectures/ai-design/full-ai-design-ad-content/course.slides";
import type { SessionConfig } from "@/src/lectures/types";

type Role = "admin" | "student";
type Screen = "categories" | "courses" | "course" | "session" | "student" | "viewer";
type SessionInfo = { role: Role };

const SESSION_KEY = "dipeatit-session";
const ADMIN = { id: "admin", password: "admin1234" };
const categories = [
  { id: "ai-design", name: "AI / AI Design", count: 1, tone: "blue" },
  { id: "ad", name: "광고콘텐츠", count: 0, tone: "pink" },
  { id: "publishing", name: "웹퍼블리싱", count: 0, tone: "purple" },
  { id: "react", name: "React", count: 0, tone: "mint" },
];

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDate(date: string, short = false) {
  const [year, month, day] = date.split("-");
  return short ? `${Number(month)}월 ${Number(day)}일` : `${year}.${month}.${day}`;
}

function sessionState(session: SessionConfig, today = localDateKey()) {
  if (session.releaseDate < today) return "released" as const;
  if (session.releaseDate === today) return "today" as const;
  return "locked" as const;
}

function courseState(today = localDateKey()) {
  if (today < courseConfig.startDate) return "예정";
  if (today > courseConfig.endDate) return "종료";
  return "진행중";
}

function accessKey(session: SessionConfig) {
  return `lecture-access:${courseConfig.id}:${session.id}`;
}

export function LearningApp() {
  const [ready, setReady] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [screen, setScreen] = useState<Screen>("categories");
  const [selectedSessionId, setSelectedSessionId] = useState<string>(courseConfig.sessions[0].id);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [lockedSession, setLockedSession] = useState<SessionConfig | null>(null);

  const canOpen = useCallback((session: SessionConfig, currentRole: Role) => {
    return currentRole === "admin" || sessionState(session) !== "locked" || sessionStorage.getItem(accessKey(session)) === "true";
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (raw) {
        try {
          const saved = JSON.parse(raw) as SessionInfo;
          setRole(saved.role);
          const params = new URLSearchParams(window.location.search);
          const requestedSession = courseConfig.sessions.find(item => item.id === params.get("session"));
          if (requestedSession && canOpen(requestedSession, saved.role)) {
            const requestedSection = Math.max(0, Math.min(2, Number(params.get("section") || 1) - 1));
            setSelectedSessionId(requestedSession.id);
            setSectionIndex(requestedSection);
            setScreen("viewer");
          } else {
            setScreen(saved.role === "admin" ? "categories" : "student");
          }
        } catch {
          sessionStorage.removeItem(SESSION_KEY);
        }
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [canOpen]);

  const login = (nextRole: Role) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: nextRole } satisfies SessionInfo));
    setRole(nextRole);
    setScreen(nextRole === "admin" ? "categories" : "student");
  };

  const logout = () => {
    Object.keys(sessionStorage).filter(key => key === SESSION_KEY || key.startsWith("lecture-access:")).forEach(key => sessionStorage.removeItem(key));
    window.history.replaceState(null, "", "/");
    setRole(null);
    setScreen("categories");
  };

  const openViewer = (session: SessionConfig, index = 0) => {
    if (!role) return;
    if (!canOpen(session, role)) {
      setLockedSession(session);
      return;
    }
    setSelectedSessionId(session.id);
    setSectionIndex(index);
    setScreen("viewer");
  };

  const selectedSession = courseConfig.sessions.find(item => item.id === selectedSessionId) ?? courseConfig.sessions[0];

  if (!ready) return <div className="min-h-screen bg-[#f8faff]" />;
  if (!role) return <LoginScreen onLogin={login} />;

  if (screen === "viewer") {
    return (
      <LectureViewer
        role={role}
        session={selectedSession}
        initialIndex={sectionIndex}
        onIndexChange={setSectionIndex}
        onExit={() => setScreen(role === "admin" ? "session" : "student")}
      />
    );
  }

  return (
    <>
      <DashboardShell role={role} active={screen} onNavigate={setScreen} onLogout={logout}>
        {role === "admin" && screen === "categories" && <AdminCategories onOpen={() => setScreen("courses")} />}
        {role === "admin" && screen === "courses" && <AdminCourses onBack={() => setScreen("categories")} onOpen={() => setScreen("course")} />}
        {role === "admin" && screen === "course" && <AdminCourse onBack={() => setScreen("courses")} onOpenSession={(session) => { setSelectedSessionId(session.id); setScreen("session"); }} />}
        {role === "admin" && screen === "session" && <AdminSession session={selectedSession} onBack={() => setScreen("course")} onOpen={openViewer} />}
        {role === "student" && <StudentDashboard onOpen={openViewer} />}
      </DashboardShell>
      {lockedSession && <AccessModal session={lockedSession} onClose={() => setLockedSession(null)} onSuccess={() => { sessionStorage.setItem(accessKey(lockedSession), "true"); const target = lockedSession; setLockedSession(null); openViewer(target); }} />}
    </>
  );
}

function LoginScreen({ onLogin }: { onLogin: (role: Role) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = String(data.get("id") || "").trim();
    const password = String(data.get("password") || "");
    if (id === ADMIN.id && password === ADMIN.password) return onLogin("admin");
    if (id === courseConfig.studentAccount.id && password === courseConfig.studentAccount.password) return onLogin("student");
    setError("계정 정보를 다시 확인해주세요.");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8faff] px-5 py-8 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[30rem] w-[30rem] rounded-full bg-indigo-100/60 blur-3xl" />
      <header className="relative mx-auto w-full max-w-[1440px]"><BrandMark /></header>
      <section className="relative mx-auto mt-8 grid min-h-[calc(100vh-10rem)] w-full max-w-[1440px] overflow-hidden rounded-[30px] border border-white/90 bg-white shadow-[0_28px_80px_rgba(44,74,132,.12)] lg:grid-cols-[1.14fr_.86fr]">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#f6f9ff] via-white to-[#edf4ff] p-14 lg:flex lg:flex-col lg:justify-between">
          <div className="relative z-10 max-w-xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#3478f6] shadow-sm"><Sparkles size={15} /> 생성형 AI 실무 클래스</span>
            <h1 className="mt-8 text-[52px] font-bold leading-[1.18] tracking-[-.055em]">배우고, 만들고,<br />성장하세요</h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#667085]">어렵게만 느껴졌던 IT와 AI를 직접 만들며 배워보세요. 오늘의 작은 경험이 내일의 실력이 됩니다.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 text-sm text-[#667085]"><div className="flex -space-x-2">{["민", "준", "AI"].map((label, index) => <span key={label} className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-indigo-100 text-xs font-bold text-blue-700" style={{ zIndex: 3-index }}>{label}</span>)}</div><span><strong className="text-[#172033]">실습 중심</strong>으로 가볍게 시작해요</span></div>
          <div className="animate-float absolute right-10 top-[28%] h-52 w-64"><div className="absolute left-4 top-10 h-36 w-52 rotate-[-8deg] rounded-[28px] border border-white/90 bg-gradient-to-br from-[#c8e1ff] to-[#6aa5ff] shadow-[0_22px_40px_rgba(52,120,246,.22)]"/><div className="absolute right-0 top-2 h-40 w-56 rotate-[5deg] rounded-[30px] border border-white/90 bg-gradient-to-br from-white/90 via-[#bcd8ff] to-[#76aafa] shadow-[0_24px_50px_rgba(52,120,246,.25)]"><div className="absolute inset-5 rounded-[20px] border border-white/60 bg-gradient-to-br from-white/50 to-transparent"/></div></div>
        </div>
        <div className="flex items-center justify-center px-6 py-12 sm:px-14 lg:px-20">
          <div className="w-full max-w-[430px] animate-fade-up">
            <p className="text-sm font-semibold text-[#3478f6]">다시 만나 반가워요</p><h2 className="mt-2 text-[34px] font-bold tracking-[-.045em]">학습을 시작해볼까요?</h2><p className="mt-3 text-[15px] leading-6 text-[#667085]">강사에게 안내받은 계정으로 로그인해주세요.</p>
            <form className="mt-9 space-y-5" onSubmit={submit}>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-[#344054]">아이디</span><input name="id" autoComplete="username" className="focus-ring h-14 w-full rounded-[14px] border border-[#dfe6f1] bg-white px-4 text-[15px] outline-none transition focus:border-[#7faeff]" placeholder="아이디를 입력하세요" onChange={() => setError("")} /></label>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-[#344054]">비밀번호</span><span className="relative block"><input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" className="focus-ring h-14 w-full rounded-[14px] border border-[#dfe6f1] bg-white px-4 pr-12 text-[15px] outline-none transition focus:border-[#7faeff]" placeholder="비밀번호를 입력하세요" onChange={() => setError("")} /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"} className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#98a2b3] hover:text-[#3478f6]">{showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}</button></span></label>
              {error && <p role="alert" className="text-sm font-medium text-[#e5484d]">{error}</p>}
              <button type="submit" className="focus-ring flex h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-[#3478f6] font-semibold text-white shadow-[0_10px_24px_rgba(52,120,246,.24)] transition hover:bg-[#2467e8]">로그인 <ArrowRight size={18}/></button>
            </form>
            <div className="mt-5 rounded-[14px] border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs leading-5 text-[#667085]"><strong className="text-[#3478f6]">데모 계정</strong><br/>관리자 admin / admin1234<br/>수강생 fullai / fullai2026</div>
            <div className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] p-4 text-[13px] leading-5 text-[#667085]"><LockKeyhole className="mt-0.5 shrink-0 text-[#7a8ba8]" size={17}/><p>브라우저를 닫으면 로그인 정보가 자동으로 삭제됩니다.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardShell({ role, active, onNavigate, onLogout, children }: { role: Role; active: Screen; onNavigate: (screen: Screen) => void; onLogout: () => void; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbfcff] lg:grid lg:grid-cols-[274px_1fr]">
      <aside className="hidden min-h-screen border-r border-[#e7ecf3] bg-white px-5 py-7 lg:flex lg:flex-col">
        <BrandMark />
        <nav className="mt-9 space-y-2">
          <NavButton active={role === "student"} icon={<Home size={19}/>} label="홈" onClick={() => role === "student" && onNavigate("student")} />
          {role === "admin" && <NavButton active={["categories","courses","course","session"].includes(active)} icon={<Layers3 size={19}/>} label="강의 카테고리" onClick={() => onNavigate("categories")} />}
          {role === "student" && <NavButton icon={<BookOpen size={19}/>} label="내 강의" onClick={() => onNavigate("student")} />}
        </nav>
        <div className="mt-auto rounded-[18px] border border-[#e1e7f0] bg-gradient-to-br from-white to-[#f5f8ff] p-4">
          <div className="flex items-center gap-2 text-sm font-bold"><GraduationCap size={18} className="text-[#3478f6]"/>{role === "admin" ? "관리자 모드" : "FULL AI 클래스"}</div>
          <p className="mt-2 text-xs leading-5 text-[#667085]">{role === "admin" ? "전체 강의와 공개 설정을 확인합니다." : "39시간 · 13회차 실습 과정"}</p>
        </div>
        <button onClick={onLogout} className="focus-ring mt-4 flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[#667085] hover:bg-[#f5f7fb] hover:text-[#172033]"><LogOut size={18}/> 로그아웃</button>
      </aside>
      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex h-[82px] items-center justify-between border-b border-[#e9edf4] bg-white/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="lg:hidden"><BrandMark compact /></div>
          <div className="hidden max-w-[480px] flex-1 items-center gap-3 rounded-[14px] border border-[#e2e7f0] bg-[#fbfcff] px-4 text-[#98a2b3] sm:flex"><Search size={18}/><span className="py-3.5 text-sm">강의와 회차를 확인해보세요</span></div>
          <div className="ml-auto flex items-center gap-3"><button aria-label="알림" className="focus-ring rounded-xl p-2.5 text-[#667085] hover:bg-[#f4f7fc]"><Bell size={20}/></button><div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#e7efff] to-[#c6d7f4] text-sm font-bold text-[#55709d]">{role === "admin" ? "관" : "수"}</div><span className="hidden text-sm font-semibold sm:inline">{role === "admin" ? "관리자" : "수강생"}</span><button onClick={onLogout} aria-label="로그아웃" className="focus-ring rounded-xl p-2 text-[#98a2b3] hover:bg-red-50 hover:text-red-500 lg:hidden"><LogOut size={19}/></button></div>
        </header>
        <main className="mx-auto w-full max-w-[1420px] p-5 sm:p-8 lg:p-10">{children}</main>
      </div>
    </div>
  );
}

function NavButton({ active = false, icon, label, onClick }: { active?: boolean; icon: React.ReactNode; label: string; onClick: () => void }) {
  return <button onClick={onClick} className={`focus-ring flex h-12 w-full items-center gap-3 rounded-[13px] px-4 text-sm font-semibold transition ${active ? "bg-[#f1f5fd] text-[#3478f6]" : "text-[#5f6b7e] hover:bg-[#f7f9fc]"}`}>{icon}{label}</button>;
}

function PageHeading({ eyebrow, title, description, back }: { eyebrow?: string; title: string; description?: string; back?: () => void }) {
  return <div className="mb-7 flex items-start gap-4">{back && <button onClick={back} aria-label="뒤로" className="focus-ring mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#e1e7f0] bg-white text-[#667085] hover:text-[#3478f6]"><ArrowLeft size={18}/></button>}<div>{eyebrow && <p className="mb-1 text-xs font-bold uppercase tracking-[.12em] text-[#3478f6]">{eyebrow}</p>}<h1 className="text-[28px] font-bold tracking-[-.045em] sm:text-[32px]">{title}</h1>{description && <p className="mt-2 text-sm leading-6 text-[#667085]">{description}</p>}</div></div>;
}

function AdminCategories({ onOpen }: { onOpen: () => void }) {
  const toneClasses: Record<string,string> = { blue:"from-blue-100 to-blue-400 text-blue-700", pink:"from-pink-100 to-pink-400 text-pink-700", purple:"from-violet-100 to-violet-400 text-violet-700", mint:"from-emerald-100 to-emerald-400 text-emerald-700" };
  return <div className="animate-fade-up"><PageHeading eyebrow="ADMIN" title="강의 카테고리" description="운영 중인 강의를 분야별로 확인하세요."/><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{categories.map(category => <button key={category.id} onClick={() => category.count > 0 && onOpen()} className={`focus-ring group rounded-[22px] border border-[#e1e7f0] bg-white p-5 text-left shadow-[0_10px_30px_rgba(47,76,137,.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(47,76,137,.1)] ${category.count === 0 ? "opacity-60" : ""}`}><span className={`grid h-14 w-14 place-items-center rounded-[18px] bg-gradient-to-br shadow-lg ${toneClasses[category.tone]}`}><FolderOpen size={27} className="text-white"/></span><div className="mt-7 flex items-end justify-between"><div><h2 className="font-bold">{category.name}</h2><p className="mt-1 text-sm text-[#98a2b3]">{category.count}개 강의</p></div><ChevronRight size={20} className="text-[#bdc5d1] transition group-hover:translate-x-1 group-hover:text-[#3478f6]"/></div></button>)}</div></div>;
}

function AdminCourses({ onBack, onOpen }: { onBack: () => void; onOpen: () => void }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("전체");
  const status = courseState();
  const visible = courseConfig.title.toLowerCase().includes(search.toLowerCase()) && (filter === "전체" || filter === status);
  return <div className="animate-fade-up"><PageHeading eyebrow="AI / AI DESIGN" title="강의 목록" description="강의명으로 검색하거나 진행 상태를 선택할 수 있습니다." back={onBack}/><div className="mb-5 flex flex-col gap-3 rounded-[18px] border border-[#e3e8f0] bg-white p-4 sm:flex-row"><label className="flex flex-1 items-center gap-3 rounded-xl bg-[#f7f9fc] px-4 text-[#98a2b3]"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} className="h-11 w-full bg-transparent text-sm text-[#172033] outline-none" placeholder="강의명 검색"/></label><div className="flex items-center gap-2 overflow-x-auto"><ListFilter size={17} className="mr-1 shrink-0 text-[#98a2b3]"/>{["전체","예정","진행중","종료"].map(item=><button key={item} onClick={()=>setFilter(item)} className={`focus-ring shrink-0 rounded-lg px-3.5 py-2 text-xs font-bold ${filter===item?"bg-[#3478f6] text-white":"bg-[#f7f9fc] text-[#667085] hover:bg-[#edf3ff]"}`}>{item}</button>)}</div></div>{visible ? <button onClick={onOpen} className="focus-ring group grid w-full gap-4 rounded-[20px] border border-[#e1e7f0] bg-white p-5 text-left transition hover:border-blue-200 hover:shadow-[0_12px_34px_rgba(47,76,137,.08)] sm:grid-cols-[1fr_180px_100px_32px] sm:items-center"><div><p className="font-bold tracking-[-.02em]">{courseConfig.title}</p><p className="mt-2 text-sm text-[#667085]">{formatDate(courseConfig.startDate)} ~ {formatDate(courseConfig.endDate)}</p></div><span className="text-sm text-[#667085]">총 {courseConfig.sessions.length}회 · 39시간</span><StatusBadge status={status}/><ChevronRight className="text-[#b6c0ce] group-hover:text-[#3478f6]"/></button> : <div className="rounded-[20px] border border-dashed border-[#dce3ed] bg-white py-20 text-center text-sm text-[#98a2b3]">검색 결과가 없습니다.</div>}</div>;
}

function StatusBadge({ status }: { status: string }) {
  const cls = status === "진행중" ? "bg-emerald-50 text-emerald-700" : status === "예정" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600";
  return <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${cls}`}>{status}</span>;
}

function AdminCourse({ onBack, onOpenSession }: { onBack: () => void; onOpenSession: (session: SessionConfig) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const released = courseConfig.sessions.filter(s => sessionState(s) !== "locked").length;
  const copyPassword = async () => { await navigator.clipboard.writeText(courseConfig.studentAccount.password); setCopied(true); window.setTimeout(()=>setCopied(false), 1400); };
  return <div className="animate-fade-up"><PageHeading eyebrow={courseConfig.categoryName} title={courseConfig.title} description={`${formatDate(courseConfig.startDate)} ~ ${formatDate(courseConfig.endDate)}`} back={onBack}/><div className="mb-6 grid gap-4 sm:grid-cols-3"><StatCard label="진행 상태" value={courseState()} icon={<CalendarDays/>}/><StatCard label="현재 진행 회차" value={`${released} / ${courseConfig.sessions.length}`} icon={<BookOpen/>}/><StatCard label="전체 수업시간" value="39시간" icon={<GraduationCap/>}/></div><section className="mb-7 rounded-[20px] border border-[#dfe6f0] bg-white p-5 sm:p-6"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-xs font-bold text-[#98a2b3]">수강생 공통계정</p><div className="mt-2 flex flex-wrap items-center gap-3"><code className="rounded-lg bg-[#f4f7fc] px-3 py-2 text-sm font-bold text-[#3478f6]">ID {courseConfig.studentAccount.id}</code><code className="rounded-lg bg-[#f4f7fc] px-3 py-2 text-sm font-bold">PW {showPassword ? courseConfig.studentAccount.password : "••••••••••"}</code></div></div><div className="flex gap-2"><button onClick={()=>setShowPassword(!showPassword)} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[#dfe6f0] text-[#667085] hover:text-[#3478f6]" aria-label="비밀번호 보기">{showPassword?<EyeOff size={18}/>:<Eye size={18}/>}</button><button onClick={copyPassword} className="focus-ring flex h-10 items-center gap-2 rounded-xl border border-[#dfe6f0] px-3 text-xs font-bold text-[#667085] hover:text-[#3478f6]">{copied?<ClipboardCheck size={17}/>:<Copy size={17}/>} {copied?"복사됨":"복사"}</button></div></div></section><SessionList admin onOpen={onOpenSession}/></div>;
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return <div className="rounded-[18px] border border-[#e1e7f0] bg-white p-5"><div className="flex items-center gap-3 text-[#3478f6]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf4ff]">{icon}</span><div><p className="text-xs text-[#98a2b3]">{label}</p><p className="mt-1 font-bold text-[#172033]">{value}</p></div></div></div>;
}

function SessionList({ admin = false, onOpen }: { admin?: boolean; onOpen: (session: SessionConfig) => void }) {
  const [visibleCodes, setVisibleCodes] = useState<Record<string,boolean>>({});
  const [copiedCode, setCopiedCode] = useState("");
  const copyCode = async (session: SessionConfig) => { await navigator.clipboard.writeText(session.accessCode); setCopiedCode(session.id); window.setTimeout(()=>setCopiedCode(""),1400); };
  return <section><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">전체 회차</h2><span className="text-sm text-[#98a2b3]">총 {courseConfig.sessions.length}회</span></div><div className="space-y-3">{courseConfig.sessions.map(session=>{const state=sessionState(session);return <div key={session.id} className={`group flex flex-col gap-3 rounded-[17px] border bg-white p-4 transition sm:flex-row sm:items-center ${state==="today"?"border-[#8fb8ff] bg-[#f9fbff] shadow-[0_8px_24px_rgba(52,120,246,.08)]":"border-[#e3e8f0] hover:border-blue-200"}`}><button onClick={()=>onOpen(session)} className="focus-ring flex min-w-0 flex-1 items-center gap-4 rounded-xl text-left"><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-[14px] text-sm font-bold ${state==="locked"&&!admin?"bg-[#f3f5f8] text-[#98a2b3]":"bg-[#edf4ff] text-[#3478f6]"}`}>{state==="locked"&&!admin?<LockKeyhole size={18}/>:String(session.session).padStart(2,"0")}</span><span className="min-w-0"><span className="flex items-center gap-2"><span className="truncate font-bold">{session.title}</span>{state==="today"&&<span className="h-2 w-2 shrink-0 rounded-full bg-[#3478f6]"/>}{session.attachments.length>0&&<Paperclip size={14} className="shrink-0 text-[#98a2b3]"/>}</span><span className="mt-1 block text-xs text-[#98a2b3]">{formatDate(session.releaseDate)} 공개</span></span></button>{admin?<div className="flex items-center gap-2 pl-16 sm:pl-0"><button onClick={()=>setVisibleCodes(prev=>({...prev,[session.id]:!prev[session.id]}))} className="focus-ring rounded-lg bg-[#f5f7fb] px-3 py-2 text-xs font-bold text-[#667085]">{visibleCodes[session.id]?session.accessCode:"코드 보기"}</button>{visibleCodes[session.id]&&<button onClick={()=>copyCode(session)} className="focus-ring grid h-8 w-8 place-items-center rounded-lg border border-[#e0e6ef] text-[#98a2b3] hover:text-[#3478f6]" aria-label="코드 복사">{copiedCode===session.id?<Check size={15}/>:<Copy size={15}/>}</button>}<ChevronRight size={18} className="text-[#bdc5d1]"/></div>:<span className="pl-16 text-xs font-semibold text-[#98a2b3] sm:pl-0">{state==="locked"?formatDate(session.releaseDate,true):state==="today"?"오늘 수업":"공개됨"}</span>}</div>})}</div></section>;
}

function AdminSession({ session, onBack, onOpen }: { session: SessionConfig; onBack: () => void; onOpen: (session: SessionConfig, index?: number) => void }) {
  const [showCode,setShowCode]=useState(false); const [copied,setCopied]=useState(false);
  const copy=async()=>{await navigator.clipboard.writeText(session.accessCode);setCopied(true);window.setTimeout(()=>setCopied(false),1400)};
  return <div className="animate-fade-up"><PageHeading eyebrow={`${String(session.session).padStart(2,"0")}회차`} title={session.title} description={`${formatDate(session.releaseDate)} 공개 · 총 ${session.sections.length}개 section`} back={onBack}/><div className="grid gap-6 xl:grid-cols-[1fr_360px]"><section className="rounded-[20px] border border-[#e1e7f0] bg-white p-5 sm:p-6"><h2 className="font-bold">Section 목록</h2><div className="mt-4 space-y-2">{session.sections.map((section,index)=><button key={section.id} onClick={()=>onOpen(session,index)} className="focus-ring flex w-full items-center justify-between rounded-[13px] border border-transparent px-4 py-3 text-left hover:border-blue-100 hover:bg-[#f7faff]"><span className="flex items-center gap-3"><span className="text-xs font-bold text-[#3478f6]">{String(index+1).padStart(2,"0")}</span><span className="text-sm font-semibold">{section.title}</span></span><ChevronRight size={17} className="text-[#bdc5d1]"/></button>)}</div><button onClick={()=>onOpen(session,0)} className="focus-ring mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3478f6] text-sm font-bold text-white hover:bg-[#2467e8]"><Play size={17} fill="currentColor"/> 강의 시작</button></section><aside className="space-y-4"><div className="rounded-[20px] border border-[#e1e7f0] bg-white p-5"><p className="text-xs font-bold text-[#98a2b3]">조기 접근 인증코드</p><div className="mt-3 flex items-center gap-2"><code className="flex-1 rounded-xl bg-[#f5f7fb] px-4 py-3 text-sm font-bold">{showCode?session.accessCode:"••••••"}</code><button onClick={()=>setShowCode(!showCode)} className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-[#e1e7f0] text-[#667085]">{showCode?<EyeOff size={18}/>:<Eye size={18}/>}</button>{showCode&&<button onClick={copy} className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-[#e1e7f0] text-[#667085]">{copied?<Check size={18}/>:<Copy size={18}/>}</button>}</div></div><div className="rounded-[20px] border border-[#e1e7f0] bg-white p-5"><p className="text-xs font-bold text-[#98a2b3]">첨부자료</p>{session.attachments.map(file=><div key={file.name} className="mt-3 flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3"><FileText size={18} className="text-[#3478f6]"/><div><p className="text-sm font-semibold">{file.name}</p><p className="mt-0.5 text-xs text-[#98a2b3]">자료 준비 중</p></div></div>)}</div></aside></div></div>;
}

function StudentDashboard({ onOpen }: { onOpen: (session: SessionConfig) => void }) {
  const released=courseConfig.sessions.filter(s=>sessionState(s)!=="locked").length;
  const percent=Math.round(released/courseConfig.sessions.length*100);
  return <div className="animate-fade-up"><section className="relative mb-7 overflow-hidden rounded-[24px] border border-[#dce6f5] bg-gradient-to-br from-[#f7faff] via-white to-[#eef5ff] p-6 sm:p-8"><div className="relative z-10 max-w-2xl"><span className="text-xs font-bold text-[#3478f6]">MY CLASS</span><h1 className="mt-3 text-[28px] font-bold leading-tight tracking-[-.045em] sm:text-[35px]">{courseConfig.title}</h1><p className="mt-3 text-sm text-[#667085]">{formatDate(courseConfig.startDate)} ~ {formatDate(courseConfig.endDate)} · 총 39시간</p><button onClick={()=>onOpen(courseConfig.sessions[Math.max(0,released-1)])} className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#3478f6] px-5 text-sm font-bold text-white shadow-[0_9px_22px_rgba(52,120,246,.22)]">최근 회차 보기 <ArrowRight size={17}/></button></div><div className="absolute -right-6 -top-5 hidden h-64 w-80 sm:block"><div className="absolute bottom-6 left-5 h-40 w-56 -rotate-6 rounded-[30px] bg-gradient-to-br from-[#a9d0ff] to-[#5c96f2] shadow-[0_25px_50px_rgba(52,120,246,.2)]"/><div className="absolute right-2 top-5 h-44 w-60 rotate-6 rounded-[32px] border border-white bg-gradient-to-br from-white/80 via-[#b8d4ff] to-[#73a4f2] shadow-[0_25px_55px_rgba(52,120,246,.23)]"/></div></section><div className="mb-8 grid gap-4 lg:grid-cols-[1fr_360px]"><div className="rounded-[20px] border border-[#e1e7f0] bg-white p-5 sm:p-6"><div className="flex items-end justify-between"><div><p className="text-xs font-bold text-[#98a2b3]">일정 기반 진행률</p><p className="mt-2 text-2xl font-bold">{released} / {courseConfig.sessions.length} <span className="text-base text-[#3478f6]">· {percent}%</span></p></div><CalendarDays className="text-[#8aa9dc]"/></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e9eef6]"><div className="h-full rounded-full bg-gradient-to-r from-[#3478f6] to-[#82b3ff]" style={{width:`${percent}%`}}/></div><p className="mt-3 text-xs text-[#98a2b3]">실제 열람 여부가 아닌 강의 공개 일정으로 계산됩니다.</p></div><div className="rounded-[20px] border border-[#e1e7f0] bg-white p-5 sm:p-6"><p className="text-xs font-bold text-[#98a2b3]">오늘의 안내</p><p className="mt-2 font-bold">{courseState()==="종료"?"모든 회차가 공개되었습니다":courseState()==="예정"?"곧 강의가 시작됩니다":"강의가 진행 중입니다"}</p><p className="mt-2 text-sm leading-6 text-[#667085]">잠긴 회차도 강사가 전달한 인증코드로 미리 입장할 수 있어요.</p></div></div><SessionList onOpen={onOpen}/></div>;
}

function AccessModal({ session, onClose, onSuccess }: { session: SessionConfig; onClose: () => void; onSuccess: () => void }) {
  const [code,setCode]=useState(""); const [error,setError]=useState("");
  const submit=(event:React.FormEvent)=>{event.preventDefault();if(code.trim().toUpperCase()===session.accessCode){onSuccess();}else{setError("인증코드를 다시 확인해주세요.");}};
  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#172033]/35 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="access-title"><form onSubmit={submit} className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-[0_30px_80px_rgba(23,32,51,.24)] sm:p-7"><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#fff7e8] text-[#e59a18]"><LockKeyhole size={22}/></span><button type="button" onClick={onClose} className="focus-ring rounded-lg p-2 text-[#98a2b3] hover:bg-[#f5f7fb]" aria-label="닫기"><X size={20}/></button></div><h2 id="access-title" className="mt-5 text-xl font-bold">아직 공개되지 않은 회차예요</h2><p className="mt-2 text-sm leading-6 text-[#667085]"><strong>{formatDate(session.releaseDate,true)}</strong>에 공개됩니다. 강사가 전달한 인증코드가 있다면 미리 입장할 수 있습니다.</p><label className="mt-6 block"><span className="mb-2 block text-sm font-bold">인증코드</span><input autoFocus value={code} onChange={e=>{setCode(e.target.value);setError("")}} className="focus-ring h-13 w-full rounded-xl border border-[#dfe6f0] px-4 uppercase outline-none focus:border-[#7faeff]" placeholder="인증코드를 입력하세요"/></label>{error&&<p role="alert" className="mt-2 text-sm font-semibold text-[#e5484d]">{error}</p>}<button className="focus-ring mt-5 h-12 w-full rounded-xl bg-[#3478f6] text-sm font-bold text-white hover:bg-[#2467e8]">확인하고 입장</button></form></div>;
}

function LectureViewer({ role, session, initialIndex, onIndexChange, onExit }: { role: Role; session: SessionConfig; initialIndex: number; onIndexChange: (index:number)=>void; onExit:()=>void }) {
  const rootRef=useRef<HTMLDivElement>(null);
  const [index,setIndex]=useState(initialIndex);
  const [menuOpen,setMenuOpen]=useState(false);
  const [memoOpen,setMemoOpen]=useState(false);
  const [attachmentOpen,setAttachmentOpen]=useState(false);
  const [exitOpen,setExitOpen]=useState(false);
  const [fullscreen,setFullscreen]=useState(false);
  const [previewMemo,setPreviewMemo]=useState(false);
  const [memo,setMemo]=useState("");
  const slides=courseSlides[session.id];
  const Slide=slides[index];

  const go=useCallback((next:number)=>{const safe=Math.max(0,Math.min(slides.length-1,next));setIndex(safe);onIndexChange(safe);setMenuOpen(false);const params=new URLSearchParams();params.set("session",session.id);params.set("section",String(safe+1));window.history.pushState(null,"",`?${params.toString()}`);},[onIndexChange,session.id,slides.length]);

  useEffect(()=>{const params=new URLSearchParams();params.set("session",session.id);params.set("section",String(index+1));window.history.replaceState(null,"",`?${params.toString()}`);},[index,session.id]);
  useEffect(()=>{const unload=(e:BeforeUnloadEvent)=>{e.preventDefault();e.returnValue=""};window.addEventListener("beforeunload",unload);return()=>window.removeEventListener("beforeunload",unload)},[]);
  useEffect(()=>{const change=()=>setFullscreen(Boolean(document.fullscreenElement));document.addEventListener("fullscreenchange",change);return()=>document.removeEventListener("fullscreenchange",change)},[]);
  useEffect(()=>{const key=(e:KeyboardEvent)=>{const target=e.target as HTMLElement;const editable=target.matches("input, textarea, video, [contenteditable=true]");if(editable)return;if(e.key==="ArrowLeft")go(index-1);if(e.key==="ArrowRight")go(index+1)};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[go,index]);

  const toggleFullscreen=async()=>{if(!document.fullscreenElement)await rootRef.current?.requestFullscreen();else await document.exitFullscreen()};
  return <div ref={rootRef} className={`flex h-screen overflow-hidden flex-col bg-[#eef2f8] text-[#172033] ${fullscreen ? "viewer-fullscreen" : ""}`}>
    {!fullscreen&&<header className="flex h-[70px] shrink-0 items-center justify-between border-b border-[#dfe5ef] bg-white px-4 sm:px-6"><button onClick={()=>setExitOpen(true)} className="focus-ring flex min-w-0 items-center gap-3 rounded-xl p-2 text-left hover:bg-[#f6f8fc]"><ArrowLeft size={19} className="shrink-0 text-[#667085]"/><span className="min-w-0"><span className="block truncate text-xs text-[#98a2b3]">{courseConfig.title}</span><span className="block truncate text-sm font-bold">{session.title}</span></span></button><span className="hidden text-xs font-semibold text-[#98a2b3] sm:inline">{role==="admin"?"관리자 미리보기":"수강생 강의 화면"}</span></header>}
    <main className="relative flex min-h-0 flex-1 items-center justify-center p-3 sm:p-5 lg:p-7"><div className="lecture-canvas relative shrink-0 overflow-hidden rounded-[12px] bg-white shadow-[0_18px_55px_rgba(35,53,87,.13)] sm:rounded-[18px]"><Slide/></div><button onClick={()=>setMenuOpen(!menuOpen)} className="focus-ring absolute left-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-xl border border-white/70 bg-white/90 text-[#667085] shadow-lg backdrop-blur hover:text-[#3478f6]" aria-label="목차"><Menu size={20}/></button>{menuOpen&&<div className="absolute left-5 top-[72px] z-30 w-[min(360px,calc(100vw-40px))] rounded-[18px] border border-[#dfe6f0] bg-white p-3 shadow-[0_22px_60px_rgba(23,32,51,.18)]"><div className="flex items-center justify-between px-2 py-2"><p className="font-bold">Section 목차</p><button onClick={()=>setMenuOpen(false)} className="p-1 text-[#98a2b3]"><X size={18}/></button></div>{session.sections.map((item,i)=><button key={item.id} onClick={()=>go(i)} className={`focus-ring mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm ${i===index?"bg-[#edf4ff] font-bold text-[#3478f6]":"hover:bg-[#f7f9fc]"}`}><span className="text-xs">{String(i+1).padStart(2,"0")}</span>{item.title}</button>)}</div>}
    </main>
    <footer className="relative flex min-h-[74px] shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[#dfe5ef] bg-white px-4 py-3 sm:px-6"><div className="flex items-center gap-2"><button onClick={()=>setAttachmentOpen(!attachmentOpen)} className="focus-ring flex h-10 items-center gap-2 rounded-xl border border-[#dfe5ef] px-3 text-xs font-bold text-[#667085] hover:text-[#3478f6]"><Paperclip size={17}/> <span className="hidden sm:inline">첨부자료</span></button><button onClick={()=>setMemoOpen(!memoOpen)} className={`focus-ring flex h-10 items-center gap-2 rounded-xl border px-3 text-xs font-bold ${memoOpen?"border-blue-200 bg-blue-50 text-[#3478f6]":"border-[#dfe5ef] text-[#667085]"}`}><MessageSquareText size={17}/> <span className="hidden sm:inline">메모</span></button><button onClick={toggleFullscreen} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[#dfe5ef] text-[#667085] hover:text-[#3478f6]" aria-label="전체화면">{fullscreen?<Minimize2 size={17}/>:<Maximize2 size={17}/>}</button></div><div className="flex items-center gap-2"><button disabled={index===0} onClick={()=>go(index-1)} className="focus-ring h-10 rounded-xl border border-[#dfe5ef] px-3 text-xs font-bold text-[#667085] disabled:cursor-not-allowed disabled:opacity-35">이전</button><span className="min-w-14 text-center text-xs font-bold"><strong className="text-[#3478f6]">{index+1}</strong> / {slides.length}</span>{index<slides.length-1?<button onClick={()=>go(index+1)} className="focus-ring flex h-10 items-center gap-1 rounded-xl bg-[#3478f6] px-4 text-xs font-bold text-white">다음 <ArrowRight size={15}/></button>:<button onClick={()=>setExitOpen(true)} className="focus-ring h-10 rounded-xl bg-[#3478f6] px-4 text-xs font-bold text-white">수업 목록으로 돌아가기</button>}</div>{attachmentOpen&&<div className="absolute bottom-[66px] left-4 z-40 w-72 rounded-[17px] border border-[#dfe6f0] bg-white p-4 shadow-[0_20px_55px_rgba(23,32,51,.16)]"><p className="text-sm font-bold">첨부자료</p>{session.attachments.map(file=><div key={file.name} className="mt-3 flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3"><FileText size={18} className="text-[#3478f6]"/><div><p className="text-xs font-semibold">{file.name}</p><p className="mt-0.5 text-[11px] text-[#98a2b3]">자료 준비 중</p></div></div>)}</div>}</footer>
    {memoOpen&&<aside className="fixed bottom-[86px] right-4 z-40 flex h-[min(480px,calc(100vh-150px))] w-[min(380px,calc(100vw-32px))] flex-col rounded-[20px] border border-[#dfe6f0] bg-white shadow-[0_26px_70px_rgba(23,32,51,.2)]"><div className="flex items-center justify-between border-b border-[#e6ebf2] px-4 py-3"><div><p className="text-sm font-bold">수업 메모</p><p className="text-[11px] text-[#98a2b3]">저장되지 않는 임시 메모입니다</p></div><button onClick={()=>setMemoOpen(false)} className="focus-ring p-2 text-[#98a2b3]"><X size={18}/></button></div><div className="flex gap-1 border-b border-[#edf0f5] px-3 py-2"><button onClick={()=>setPreviewMemo(false)} className={`rounded-lg px-3 py-1.5 text-xs font-bold ${!previewMemo?"bg-[#edf4ff] text-[#3478f6]":"text-[#98a2b3]"}`}>작성</button><button onClick={()=>setPreviewMemo(true)} className={`rounded-lg px-3 py-1.5 text-xs font-bold ${previewMemo?"bg-[#edf4ff] text-[#3478f6]":"text-[#98a2b3]"}`}>미리보기</button><button onClick={()=>navigator.clipboard.writeText(memo)} className="ml-auto flex items-center gap-1 rounded-lg px-2 text-xs font-bold text-[#667085]"><Clipboard size={14}/> 복사</button></div>{previewMemo?<MemoPreview memo={memo}/>:<textarea value={memo} onChange={e=>setMemo(e.target.value)} className="soft-scrollbar min-h-0 flex-1 resize-none p-4 text-sm leading-7 outline-none" placeholder="# 오늘 배운 내용&#10;- 핵심 개념&#10;- 실습하며 궁금했던 점"/>}</aside>}
    {exitOpen&&<div className="fixed inset-0 z-50 grid place-items-center bg-[#172033]/35 p-5 backdrop-blur-sm"><div className="w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff7e8] text-[#e59a18]"><LogOut size={20}/></span><h2 className="mt-4 text-lg font-bold">강의 화면에서 나갈까요?</h2><p className="mt-2 text-sm leading-6 text-[#667085]">작성한 메모는 저장되지 않습니다. 필요한 내용은 나가기 전에 복사해주세요.</p><div className="mt-6 flex gap-2"><button onClick={()=>setExitOpen(false)} className="focus-ring h-11 flex-1 rounded-xl border border-[#dfe6f0] text-sm font-bold text-[#667085]">취소</button><button onClick={()=>{window.history.replaceState(null,"","/");onExit()}} className="focus-ring h-11 flex-1 rounded-xl bg-[#3478f6] text-sm font-bold text-white">나가기</button></div></div></div>}
  </div>;
}

function MemoPreview({ memo }: { memo: string }) {
  const lines=memo.split("\n");
  return <div className="soft-scrollbar min-h-0 flex-1 overflow-y-auto p-4 text-sm leading-7">{memo.trim()?lines.map((line,i)=>{if(line.startsWith("# "))return <h3 key={i} className="mb-2 mt-3 text-lg font-bold">{line.slice(2)}</h3>;if(line.startsWith("## "))return <h4 key={i} className="mb-1 mt-3 font-bold">{line.slice(3)}</h4>;if(line.startsWith("- "))return <p key={i} className="flex gap-2"><span className="text-[#3478f6]">•</span>{line.slice(2)}</p>;return <p key={i} className="min-h-7">{line}</p>}):<p className="text-[#98a2b3]">미리 볼 메모가 없습니다.</p>}</div>;
}
