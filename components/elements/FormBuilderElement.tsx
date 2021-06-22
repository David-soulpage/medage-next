// // react
// import React, { FC } from "react";
// // dreact drag and drop
// import { useDrag } from "react-dnd";
// // styled-icons
// import { Pencil, Delete } from "components/styled-icons";

// interface IProps {
//   pos: number;
//   col: any;
//   index: number;
//   onPress: (value: any) => any;
// }

// const FormBuilderElement: FC<IProps> = ({ pos, col, index, onPress }) => {
//   const [collected, drag, dragPreview] = useDrag<any, any, any>(() => ({
//     type: "element",
//     item: { index },
//   }));

//   let mutatedPos = pos === 0 ? pos + 1 : pos;
//   console.log(pos, col, index, "element issues");
//   const onPressItem = (element: any) => {
//     onPress(element);
//   };

//   const Item = () => {
//     return (
//       <>
//         <div
//           className="px-5 py-3 bg-secondary me-5 field-item-container position-relative"
//           // onClick={() => updateNodeValue(col.id)}
//         >
//           <div className="mb-2 d-flex align-items-center">
//             <div
//               onClick={() =>
//                 onPressItem({
//                   type: "update",
//                   data: {
//                     depth: index,
//                     position: pos,
//                   },
//                 })
//               }
//             >
//               <small className="fw-bold text-base-black">
//                 {col.value.label ? col.value.label : "Add Label"}
//               </small>
//               <Pencil className="text-base-black ms-3" size="20" />
//             </div>

//             <div
//               className="ms-auto"
//               onClick={() =>
//                 onPressItem({
//                   type: "delete",
//                   data: { id: col.uid, serverId: col.serverId, depth: index },
//                 })
//               }
//             >
//               <Delete className="text-red" size="20" />
//             </div>
//           </div>
//           <div className="w-100 py-2 border bg-white rounded px-2">{col.value.type}</div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       {collected.isDragging ? (
//         <>
//           <div ref={dragPreview}>
//             <Item />
//           </div>
//           <div
//             className="fw-bold me-5"
//             onClick={() =>
//               onPressItem({
//                 type: "plus",
//                 data: {
//                   depth: index,
//                   position: mutatedPos,
//                 },
//               })
//             }
//           >
//             +
//           </div>
//         </>
//       ) : (
//         <>
//           <Item ref={drag} {...collected} />
//           <div
//             className="fw-bold me-5"
//             onClick={() =>
//               onPressItem({
//                 type: "plus",
//                 data: {
//                   depth: index,
//                   position: mutatedPos,
//                 },
//               })
//             }
//           >
//             +
//           </div>
//         </>
//       )}
//     </>
//   );
// };
// export default FormBuilderElement;

import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

import { DraggableLocation } from "react-beautiful-dnd";

// a little function to help us with reordering the result
export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderColors = (
  colors: ColorMap,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...colors[source.droppableId]];
  const next = [...colors[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return {
      ...colors,
      [source.droppableId]: reordered,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...colors,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };
};

interface Props {
  colors: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export const AuthorList: React.FC<Props> = ({ listId, listType, colors }) => {
  return (
    <Droppable droppableId={listId} type={listType} direction="horizontal" isCombineEnabled={false}>
      {(dropProvided) => (
        <div {...dropProvided.droppableProps}>
          <div>
            <div>
              <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                {colors.map((color, index) => (
                  <Draggable key={color} draggableId={color} index={index}>
                    {(dragProvided) => (
                      <div
                        {...dragProvided.dragHandleProps}
                        {...dragProvided.draggableProps}
                        ref={dragProvided.innerRef}
                      >
                        <div style={{ backgroundColor: color }} className="p-5 m-5">
                          {color}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
export type ColorMap = { [key: string]: string[] };
