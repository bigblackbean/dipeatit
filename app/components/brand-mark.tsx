import { FolderOpen } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${compact ? "h-10 w-10 rounded-xl" : "h-12 w-12 rounded-[14px]"} relative grid place-items-center bg-gradient-to-br from-[#79b8ff] to-[#3478f6] text-white shadow-[0_8px_22px_rgba(52,120,246,.25)]`}>
        <FolderOpen size={compact ? 21 : 25} strokeWidth={1.8} />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#87e0c1]" />
      </div>
      <div>
        <p className={`${compact ? "text-[17px]" : "text-[19px]"} font-bold tracking-[-.04em]`}>찍먹 IT</p>
        {!compact && <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">Taste, learn, and make</p>}
      </div>
    </div>
  );
}
