import React from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default function DragDrop() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'FILE', id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  return (
    <div>DrapDrop</div>
  )
}
