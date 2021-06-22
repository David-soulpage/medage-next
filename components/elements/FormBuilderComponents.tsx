// import React, { FC } from "react";
// // components
// import FormBuilderElement from "./FormBuilderElement";
//  import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

interface IProps {
  list: Array<any>;
  onPressItem: (value: any) => any;
}

// const FormBuilderComponent: FC<IProps> = ({ list, onPressItem }) => {

//   return (
//     <>
//       {list.map((row, index) => {
//         return (
//           <div key={index}>
//             <div className="d-flex align-items-center my-5 ">
//               {row.map((col, ind) => {
//                 if (ind === 0)
//                   return (
//                     <React.Fragment key={`${ind}${index}`}>
//                       <div>
//                         <div
//                           className="fw-bold me-3"
//                           onClick={() =>
//                             onPress({
//                               type: "plus",
//                               data: {
//                                 depth: index,
//                                 position: ind,
//                               },
//                             })
//                           }
//                         >
//                           +
//                         </div>
//                       </div>
//                       <FormBuilderElement col={col} index={index} pos={ind} onPress={onPress} />
//                     </React.Fragment>
//                   );
//                 else
//                   return (
//                     <FormBuilderElement
//                       key={`${ind}${index}`}
//                       col={col}
//                       index={index}
//                       pos={ind}
//                       onPress={onPress}
//                     />
//                   );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default FormBuilderComponent;

// import React from "react";

// interface Props {
//   colors: string[];
//   listId: string;
//   listType?: string;
//   internalScroll?: boolean;
//   isCombineEnabled?: boolean;
// }

// export const AuthorList: React.FC<Props> = ({ listId, listType, colors }) => {
//   return (
//     <Droppable droppableId={listId} type={listType} direction="horizontal" isCombineEnabled={false}>
//       {(dropProvided) => (
//         <div {...dropProvided.droppableProps}>
//           <div>
//             <div>
//               <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
//                 {colors.map((color, index) => (
//                   <Draggable key={color} draggableId={color} index={index}>
//                     {(dragProvided) => (
//                       <div
//                         {...dragProvided.dragHandleProps}
//                         {...dragProvided.draggableProps}
//                         ref={dragProvided.innerRef}
//                       >
//                         <div style={{ backgroundColor: color }}>{color}</div>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {dropProvided.placeholder}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Droppable>
//   );
// };

import { FC, useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "./FormBuilderElement";
import { ColorMap } from "./FormBuilderElement";
import { AuthorList } from "./FormBuilderElement";

const FormBuilderComponent: FC<IProps> = ({ list, onPressItem }) => {
  const [loaded, setLoadingStatus] = useState(false);
  const [mutatedList, setMutatedList] = useState<any>({
    a: ["blue", "red", "yellow"],
    b: ["pink"],
    c: ["green", "tan"],
  });

  useEffect(() => {
    setLoadingStatus(true);
  }, []);

  const onPress = (element: any) => {
    onPressItem(element);
  };
  return (
    <>
      {loaded ? (
        <DragDropContext
          onDragEnd={({ destination, source }) => {
            // // dropped outside the list
            if (!destination) {
              return;
            }
          }}
        >
          <div>
            {Object.entries(mutatedList).map(([k, value]: any) => {
              return (
                <div className="d-flex align-items-center my-5 ">
                  {value.map((col, ind) => {
                    if (ind === 0)
                      return (
                        <React.Fragment key={`${k}${ind}`}>
                          <div>
                            <div
                              className="fw-bold me-3"
                              onClick={() =>
                                onPress({
                                  type: "plus",
                                  data: {
                                    depth: index,
                                    position: ind,
                                  },
                                })
                              }
                            >
                              +
                            </div>
                          </div>
                          <FormBuilderElement col={col} index={index} pos={ind} onPress={onPress} />
                        </React.Fragment>
                      );
                    else
                      return (
                        <FormBuilderElement
                          key={`${ind}${index}`}
                          col={col}
                          index={index}
                          pos={ind}
                          onPress={onPress}
                        />
                      );
                  })}
                </div>
              );
            })}
          </div>
        </DragDropContext>
      ) : null}
    </>
  );
};

export default FormBuilderComponent;
