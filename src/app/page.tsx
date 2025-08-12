export default function Page() {
  return (
    <div className="w-full"> 
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 md:px-10 pt-9">
        <div className="flex items-center gap-4">
          <h1 className="text-[48px] leading-none font-extrabold tracking-tight">Mobile App</h1>

          {/* tiny link icons */}
          <div className="hidden sm:flex items-center gap-3 translate-y-1">
            <IconPen />
            <IconLink />
            <IconLink2 />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Invite */}
          <button className="hidden md:flex items-center gap-2 rounded-full border border-slate5 px-3.5 py-2 text-sm hover:bg-slate4">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purpleBar/10">
              <span className="h-1.5 w-1.5 rounded-full bg-purpleBar" />
            </span>
            Invite
          </button>

          {/* avatars */}
          <div className="hidden sm:flex -space-x-3">
            {["#FD8472","#5B9DF9","#6EE7B7","#FBBF24"].map((c,i)=>(
              <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white" style={{background:c}} />
            ))}
            <div className="h-9 w-9 rounded-full bg-slate6 text-slate11 ring-2 ring-white flex items-center justify-center text-sm font-semibold">+2</div>
          </div>

          {/* share + layout buttons */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 rounded-lg border border-slate5 px-3.5 py-2 text-sm hover:bg-slate4">
              <IconShare /> Share
            </button>
            <button className="h-10 w-10 rounded-lg border border-slate5 grid place-items-center hover:bg-slate4">
              <IconLayout />
            </button>
            <button className="h-10 w-10 rounded-lg border border-slate5 grid place-items-center hover:bg-slate4">
              <IconDots />
            </button>
          </div>
        </div>
      </header>

      {/* toolbar */}
      <section className="px-6 md:px-10 mt-6">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate5 px-3.5 py-2 text-sm hover:bg-slate4">
            <IconFilter /> Filter
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate5 px-3.5 py-2 text-sm hover:bg-slate4">
            <IconCalendar /> Today
            <IconChevron />
          </button>
        </div>
      </section>

      {/* columns */}
      <section className="px-6 md:px-10 mt-7 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Column: To Do */}
        <Column
          title="To Do"
          count={4}
          barColor="bg-purpleBar"
          className="bg-gray-100 p-4 rounded-2xl"
          cards={[
            <Card
              key="brain"
              tag={{label:"Low", bg:"tagLow", text:"tagLowText"}}
              title="Brainstorming"
              desc="Brainstorming brings team members’ diverse experience into play."
              people={3}
              comments={12}
              files={0}
            />,
            <Card
              key="research"
              tag={{label:"High", bg:"tagHigh", text:"tagHighText"}}
              title="Research"
              desc="User research helps you to create an optimal product for users."
              people={2}
              comments={10}
              files={3}
              floated
            />,
            <Card
              key="wire"
              tag={{label:"High", bg:"tagHigh", text:"tagHighText"}}
              title="Wireframes"
              desc="Low fidelity wireframes include the most basic content and visuals."
              people={0}
              comments={12}
              files={1}
            />,
          ]}
        />

        {/* Column: On Progress */}
        <Column
          title="On Progress"
          count={3}
          barColor="bg-orangeBar"
          className="bg-gray-100 p-4 rounded-2xl"
          cards={[
            <Card
              key="onboard"
              tag={{label:"Low", bg:"tagLow", text:"tagLowText"}}
              title="Onboarding Illustrations"
              image
              people={3}
              comments={14}
              files={15}
            />,
            <Card
              key="mood"
              tag={{label:"Low", bg:"tagLow", text:"tagLowText"}}
              title="Moodboard"
              imageTwo
              people={1}
              comments={9}
              files={10}
            />,
          ]}
        />

        {/* Column: Done */}
        <Column
          title="Done"
          count={2}
          barColor="bg-greenBar"
          className="bg-gray-100 p-4 rounded-2xl"
          cards={[
            <Card
              key="design"
              tag={{label:"Completed", bg:"tagGreen", text:"tagGreenText"}}
              title="Mobile App Design"
              showcase
              people={2}
              comments={12}
              files={15}
            />,
            <Card
              key="system"
              tag={{label:"Completed", bg:"tagGreen", text:"tagGreenText"}}
              title="Design System"
              desc="It just needs to adapt the UI from what you did before"
              people={4}
              comments={12}
              files={15}
            />,
          ]}
        />
      </section>
    </div>  
  );
}

/* ---------- UI bits ---------- */

function Column({
  title, count, barColor, cards, className,
}: {
  title: string; count: number; barColor: string; className?: string;  cards: React.ReactNode[];
}) {
  return (
    <div className={`rounded-2xl bg-gray ${className || ""}`}>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <h3 className="text-slate11 font-semibold">{title}</h3>
            <span className="ml-1 text-xs text-slate7">{count}</span>
          </div>
          <button className="h-7 w-7 grid place-items-center rounded-md bg-slate5/60 text-slate8 hover:bg-slate5">+</button>
        </div>
        <div className={`mt-3 h-1.5 rounded-full ${barColor}`} />
      </div>

      <div className="px-5 pb-5 space-y-5">
        {cards}
      </div>
    </div>
  );
}

function Card(props: {
  tag?: {label:string; bg:string; text:string};
  title: string;
  desc?: string;
  people: number;
  comments: number;
  files: number;
  image?: boolean;
  imageTwo?: boolean;
  showcase?: boolean;
  floated?: boolean;
}) {
  const {
    tag, title, desc, people, comments, files, image, imageTwo, showcase, floated,
  } = props;

  return (
    <div className={`relative rounded-2xl bg-white shadow-card p-5 ${floated ? "translate-y-6" : ""}`}>
      {tag && (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-${tag.bg} text-${tag.text}`}>
          {tag.label}
        </span>
      )}

      <h4 className="mt-3 text-lg font-semibold text-slate11">{title}</h4>


      {desc && <p className="mt-2 text-sm leading-relaxed text-gray-400 text-slate8">{desc}</p>}

      {image && (
        <div className="mt-4 aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate4" />
      )}
      {imageTwo && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="aspect-[4/3] rounded-xl bg-slate4" />
          <div className="aspect-[4/3] rounded-xl bg-slate4" />
        </div>
      )}
      {showcase && (
        <div className="mt-4 aspect-[16/9] rounded-xl bg-slate4" />
      )}

      <div className="mt-4 flex items-center justify-between">
        {/* avatars */}
        <div className="flex -space-x-2">
          {[...Array(Math.max(people,1)).keys()].slice(0,3).map(i=>(
            <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white" style={{background:["#FCA5A5","#93C5FD","#A7F3D0"][i%3]}} />
          ))}
        </div>

        {/* meta */}
        <div className="flex items-center gap-5 text-slate8 text-sm">
          <span className="inline-flex items-center gap-1.5"><IconComment /> {comments} comments</span>
          <span className="inline-flex items-center gap-1.5"><IconFiles /> {files} files</span>
        </div>
      </div>

      {/* menu dots */}
      <button className="absolute top-5 right-5 text-slate7 hover:text-slate9">
        <IconDots />
      </button>
    </div>
  );
}

/* ---------- tiny inline icons (no deps) ---------- */
function IconPen(){return(<svg width="18" height="18" viewBox="0 0 24 24" className="text-slate8"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm14.71-9.21c.39-.39.39-1.02 0-1.41L16.37 5.3a1 1 0 0 0-1.41 0l-1.34 1.34l3.75 3.75l1.34-1.35Z"/></svg>)}
function IconLink(){return(<svg width="18" height="18" viewBox="0 0 24 24" className="text-slate8"><path fill="currentColor" d="M10.59 13.41a1 1 0 0 1 0-1.41l2-2a1 1 0 1 1 1.41 1.41l-2 2a1 1 0 0 1-1.41 0ZM7 17a4 4 0 0 1 0-5.66l2-2A4 4 0 0 1 15.66 16l-2 2A4 4 0 0 1 7 17Zm10 0a4 4 0 0 0 0-5.66l-1-1l-1.41 1.41l1 1A2 2 0 1 1 12.17 16l2-2l1.41 1.41l-2 2A4 4 0 0 0 17 17Z"/></svg>)}
function IconLink2(){return(<svg width="18" height="18" viewBox="0 0 24 24" className="text-slate8"><path fill="currentColor" d="M3 12a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0 0 6h3v2H8a5 5 0 0 1-5-5Zm8-3h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V9Z"/></svg>)}
function IconShare(){return(<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M15 8a3 3 0 1 0-2.82-4H12a3 3 0 0 0 0 6h.18A2.99 2.99 0 0 0 15 8Zm-6 8a3 3 0 1 0-2.82-4H6a3 3 0 0 0 0 6h.18A2.99 2.99 0 0 0 9 16Zm9-2a3 3 0 1 0 0 6h.18A2.99 2.99 0 0 0 21 20a3 3 0 0 0-3-3Z"/><path fill="currentColor" d="M8.59 13.41L15.41 10l.82 1.79l-6.82 3.41z"/></svg>)}
function IconLayout(){return(<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v6H3zm0 8h10v8H3zm12 0h6v8h-6z"/></svg>)}
function IconDots(){return(<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm6 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm6 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"/></svg>)}
function IconFilter(){return(<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm4 5h10v2H7zm3 5h4v2h-4z"/></svg>)}
function IconCalendar(){return(<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v3H3V5a1 1 0 0 1 1-1h3zM3 10h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/></svg>)}
function IconChevron(){return(<svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>)}
function IconComment(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16v12H7l-3 3z"/></svg>)}
function IconFiles(){return(<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v14l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm4 4h2v10a4 4 0 0 1-4 4H8v-2h8a2 2 0 0 0 2-2z"/></svg>)}

