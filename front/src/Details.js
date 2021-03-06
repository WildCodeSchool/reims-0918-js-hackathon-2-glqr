import React from "react";
import Detail from "./Detail";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Details = ({ details }) => (
  <Droppable droppableId="droppableDetails">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {details.map((detail, index) => (
          <Draggable draggableId={detail.id} index={index} key={index}>
            {provided => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Detail
                  detailPath={detail.path}
                  detailLabel={detail.name}
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
