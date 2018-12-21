import React from "react";
import Detail from "./Detail";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Details = ({ details, handleClick }) => (
  <Droppable droppableId="droppableDetails">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {details.map((detail, index) => (
          // rendre detail draggable avec detail.type comme draggable id
          <Draggable draggableId={detail.id} index={index} key={index} toto="test">
            {provided => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Detail
                  detailLabel={detail.name}
                  detailType={detail.id}
                  handleClick={handleClick}
                  indexDetails={index}
                />
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default Details;
