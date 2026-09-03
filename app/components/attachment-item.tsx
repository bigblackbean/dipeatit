import { ExternalLink, FileText } from "lucide-react";
import type { Attachment } from "@/src/lectures/types";

export function AttachmentItem({ file, compact = false }: { file: Attachment; compact?: boolean }) {
  const url = file.url.trim();
  let href: string | undefined;

  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") href = parsed.href;
  } catch {
    // Empty or invalid URLs remain non-interactive.
  }

  const className = "mt-3 flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3";
  const content = (
    <>
      <FileText size={18} className="shrink-0 text-[#3478f6]" />
      <div className="min-w-0 flex-1">
        <p className={`${compact ? "text-xs" : "text-sm"} break-words font-semibold`}>{file.name}</p>
        <p className="mt-0.5 text-xs text-[#98a2b3]">
          {href ? "새 탭에서 열기" : url ? "올바른 http(s) URL을 입력해주세요" : "자료 준비 중"}
        </p>
      </div>
      {href && <ExternalLink size={15} className="shrink-0 text-[#3478f6]" aria-hidden="true" />}
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${className} focus-ring transition hover:bg-[#edf4ff]`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
