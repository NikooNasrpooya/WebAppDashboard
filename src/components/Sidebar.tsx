// components/Sidebar.tsx
import {
  Squares2X2Icon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-[280px] h-screen bg-white border-r border-gray-200 px-5 py-6 flex flex-col">
      {/* Top: Project M. */}
      <div className="flex items-center justify-between w-64">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-violet-500" />
          </div>
          <h1 className="text-[18px] font-semibold text-gray-900 leading-none">
            Project M.
          </h1>
        </div>
        <button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* Primary nav */}
      <nav className="mt-8 space-y-3 text-[18px]">
        <NavItem icon={<Squares2X2Icon className="h-9 w-5" />} label="Home" />
        <NavItem
          icon={<ChatBubbleLeftRightIcon className="h-9 w-5" />}
          label="Messages"
        />
        <NavItem
          icon={<ClipboardDocumentListIcon className="h-9 w-5" />}
          label="Tasks"
        />
        <NavItem icon={<UserGroupIcon className="h-9 w-5" />} label="Members" />
        <NavItem icon={<Cog6ToothIcon className="h-9 w-5" />} label="Settings" />
      </nav>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200" />
      {/* My Projects header */}
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold tracking-wider text-gray-500">
          MY PROJECTS
        </p>
        <button className="h-6 w-6 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50">
          <PlusIcon className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Projects list */}
      <ul className="mt-3 space-y-2 text-[18px]">
        <ProjectActive label="Mobile App" />
        <ProjectDot label="Website Redesign" dotClass="bg-amber-500" />
        <ProjectDot label="Design System" dotClass="bg-violet-300" />
        <ProjectDot label="Wireframes" dotClass="bg-blue-500" />
      </ul>

      {/* Thoughts Time card */}
      <div className="mt-auto">
        <div className="relative">
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 h-10 w-10 rounded-full bg-yellow-100 blur-md" />
        </div>
        <div className="mt-4 rounded-2xl bg-gray-50 p-5 text-center shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
          <div className="text-2xl mb-2">💡</div>
          <h3 className="text-[15px] font-semibold text-gray-900">Thoughts Time</h3>
          <p className="mt-2 text-[12px] leading-5 text-gray-500">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-900 hover:bg-gray-100">
            Write a message
          </button>
        </div>
      </div>
    </aside>
  );
}

/* ------------- Small presentational helpers ------------- */

function NavItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 text-gray-700 hover:text-violet-600"
    >
      <span className="text-gray-500">{icon}</span>
      <span className="leading-none">{label}</span>
    </a>
  );
}

function ProjectActive({ label }: { label: string }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-violet-50 px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-gray-900 font-medium">{label}</span>
      </div>
      <button className="h-7 px-2 rounded-md bg-violet-200/60 hover:bg-violet-200">
        <EllipsisHorizontalIcon className="h-5 w-5 text-violet-700" />
      </button>
    </li>
  );
}

function ProjectDot({
  label,
  dotClass,
}: {
  label: string;
  dotClass: string;
}) {
  return (
    <li className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-900">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      <span>{label}</span>
    </li>
  );
}
