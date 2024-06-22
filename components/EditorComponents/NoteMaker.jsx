import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialNotes = [
  { id: '1', content: 'Note 1', category: 'Category A' },
  { id: '2', content: 'Note 2', category: 'Category B' },
  { id: '3', content: 'Note 3', category: 'Category A' },
];

export default function NoteMaker() {
  const [notes, setNotes] = useState(initialNotes);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedNotes = [...notes];
    const [removedNote] = updatedNotes.splice(result.source.index, 1);
    updatedNotes.splice(result.destination.index, 0, removedNote);

    setNotes(updatedNotes);
  };

  return (
    
    <DragDropContext onDragEnd={onDragEnd} >
      <div className='bg-[#253745]  w-1/2 f h-[94vh] '>
 
      <Droppable droppableId="notes" >
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {notes.map((note, index) => (
              <Draggable key={note.id} draggableId={note.id} index={index}  >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='bg-white rounded-lg shadow-md p-4 mb-2'
                    >
                    {note.content} - {note.category}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      </div>
      
    </DragDropContext>

  );
}
