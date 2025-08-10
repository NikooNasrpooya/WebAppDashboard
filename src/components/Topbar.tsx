// components/Topbar.tsx
export default function Topbar() {
  return (
    <header className="w-full bg-white rounded-2xl h-[72px] px-6 flex items-center justify-between shadow-sm border border-gray-100">
      {/* Left: Search */}
      <div className="flex-1 max-w-[420px]">
        <label className="relative block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Magnifier */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-11 pr-4 h-[44px] rounded-xl bg-gray-100 placeholder:text-gray-400 text-[14px] text-gray-700 outline-none focus:ring-2 focus:ring-violet-200"
          />
        </label>
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-6 pl-6">
        {/* Calendar */}
        <IconBtn ariaLabel="Calendar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4.5" width="18" height="16" rx="2" />
            <path d="M16 2.5v4M8 2.5v4M3 9.5h18" />
          </svg>
        </IconBtn>

        {/* Help */}
        <IconBtn ariaLabel="Help">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9a2.5 2.5 0 1 1 3.3 2.36c-.9.34-1.3.86-1.3 1.64v.25" />
            <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
          </svg>
        </IconBtn>

        {/* Bell with red dot */}
        <div className="relative">
          <IconBtn ariaLabel="Notifications">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 16v-5a6 6 0 10-12 0v5" />
              <path d="M5 16h14" />
              <path d="M9 16v1a3 3 0 006 0v-1" />
            </svg>
          </IconBtn>
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </div>

        {/* Divider spacing */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Profile block */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-[15px] font-medium text-gray-800">Anima Agrawal</p>
            <p className="text-[12px] text-gray-400">U.P, India</p>
          </div>
          <img
            src="https://i.pravatar.cc/60?img=47"
            alt="Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100">
            {/* Caret */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/* Small icon button */
function IconBtn({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
    >
      {children}
    </button>
  );
}
