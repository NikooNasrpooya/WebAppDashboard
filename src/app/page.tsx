
'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import Image from 'next/image';
import { asset } from '@/lib/asset';



type CardItem = {
  id: string;
  tag?: { label: string; bg: string; text: string };
  title: string;
  desc?: string;
  people: number;
  comments: number;
  files: number;
  showcase?: boolean;
  floated?: boolean;
  image?: boolean;          // single image
  imageSrc?: string;        // path in /public
  imageTwo?: boolean;       // two images
  images?: string[];        // paths in /public
};

type ColumnKey = 'todo' | 'progress' | 'done';

const initialData: Record<ColumnKey, CardItem[]> = {
  todo: [
    { id: 'card-brain', tag:{label:'Low', bg:'tagLow', text:'tagLowText'}, title:'Brainstorming', desc:'Brainstorming brings team members’ diverse experience into play.', people:3, comments:12, files:0 },
    { id: 'card-research', tag:{label:'High', bg:'tagHigh', text:'tagHighText'}, title:'Research', desc:'User research helps you to create an optimal product for users.', people:2, comments:10, files:3, floated:true },
    { id: 'card-wire', tag:{label:'High', bg:'tagHigh', text:'tagHighText'}, title:'Wireframes', desc:'Low fidelity wireframes include the most basic content and visuals.', people:0, comments:12, files:1 },
  ],
  progress: [
    { id: 'card-onboard', tag:{label:'Low', bg:'tagLow', text:'tagLowText'}, title:'Onboarding Illustrations', people:3, comments:14, files:15, image:true, imageSrc: '/onboarding.jpg' },
    { id: 'card-mood', tag:{label:'Low', bg:'tagLow', text:'tagLowText'}, title:'Moodboard', people:1, comments:9, files:10, imageTwo:true, images: ['/moodboard1.jpg','/moodboard2.jpg'] },
  ],
  done: [
    { id: 'card-design', tag:{label:'Completed', bg:'tagGreen', text:'tagGreenText'}, title:'Mobile App Design', people:2, comments:12, files:15, image:true, imageSrc: '/mobileApp.jpg'},
    { id: 'card-system', tag:{label:'Completed', bg:'tagGreen', text:'tagGreenText'}, title:'Design System', desc:'It just needs to adapt the UI from what you did before', people:4, comments:12, files:15 },
  ],
};

export default function Board() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const src = source.droppableId as ColumnKey;
    const dst = destination.droppableId as ColumnKey;

    if (src === dst) {
      const items = [...columns[src]];
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);
      setColumns(prev => ({ ...prev, [src]: items }));
      return;
    }

    const srcItems = [...columns[src]];
    const dstItems = [...columns[dst]];
    const [moved] = srcItems.splice(source.index, 1);
    dstItems.splice(destination.index, 0, moved);
    setColumns(prev => ({ ...prev, [src]: srcItems, [dst]: dstItems }));
  };

  return (
    <section className="px-6 md:px-10 mt-7 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanColumn
          droppableId="todo"
          title="To Do"
          count={columns.todo.length}
          barColor="bg-purpleBar"
          items={columns.todo}
          bodyClassName="bg-gray-100 rounded-lg p-4"
        />
        <KanbanColumn
          droppableId="progress"
          title="On Progress"
          count={columns.progress.length}
          barColor="bg-orangeBar"
          items={columns.progress}
          bodyClassName="bg-gray-100 rounded-lg p-4"
        />
        <KanbanColumn
          droppableId="done"
          title="Done"
          count={columns.done.length}
          barColor="bg-greenBar"
          items={columns.done}
          bodyClassName="bg-gray-100 rounded-lg p-4"
        />
      </DragDropContext>
    </section>
  );
}

function KanbanColumn({
  droppableId, title, count, barColor, items, bodyClassName,
}: {
  droppableId: string;
  title: string;
  count: number;
  barColor: string;  
     // e.g. "bg-purpleBar"
  items: CardItem[];
  bodyClassName?: string; // optional: styling for the cards area
}) {
  return (
    <div className="rounded-2xl border border-slate5 bg-white">
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

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className={`px-5 pb-5 space-y-10 min-h-10 ${bodyClassName || ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(drag) => (
                  <div ref={drag.innerRef} {...drag.draggableProps} {...drag.dragHandleProps}>
                    <Card {...item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

function Card(props: CardItem) {
  const { tag, title, desc, people, comments, files, image, imageTwo, images, imageSrc, showcase, floated } = props;

  return (
    <div className={`relative rounded-2xl  bg-white shadow-card p-5 ${floated ? "translate-y-6" : ""}`}>
      {tag && (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-${tag.bg} text-${tag.text}`}>
          {tag.label}
        </span>
      )}

      <h4 className="mt-3 text-lg font-semibold text-slate11">{title}</h4>
      {desc && <p className="mt-2 text-sm leading-relaxed text-slate8">{desc}</p>}

      {image && imageSrc && (<img src={asset(imageSrc)}  className="mt-4 aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate4" /> )}
      {imageTwo && images && images.length >= 2 && (
  <div className="mt-4 grid grid-cols-2 gap-3">
    {images.slice(0, 2).map((src, idx) => (
      <img
        key={idx}
        src={asset(src)} 
        alt={`${title} ${idx + 1}`}
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />
    ))}
  </div>
)}
      {showcase && <div className="mt-4 aspect-[16/9] rounded-xl bg-slate4" />}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          {[...Array(Math.max(people, 1)).keys()].slice(0, 3).map(i => (
            <div
              key={i}
              className="h-7 w-7 rounded-full ring-2 ring-white"
              style={{ background: ["#FCA5A5", "#93C5FD", "#A7F3D0"][i % 3] }}
            />
          ))}
        </div>

        <div className="flex items-center gap-5 text-slate8 text-sm">
          <span className="inline-flex items-center gap-1.5">{/* IconComment */}💬 {comments} comments</span>
          <span className="inline-flex items-center gap-1.5">{/* IconFiles */}📁 {files} files</span>
        </div>
      </div>
    </div>
  );
}
