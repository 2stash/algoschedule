import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const Title = styled.h3`
  padding: 8px;
  background-color:midnightblue;
  width:100%;
  color:white;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title
              {...provided.dragHandleProps}
            >{this.props.column.title}</Title>
            <Droppable
              droppableId={this.props.column.id}
              type="task"

            >
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} handleDeleteProblem={this.props.handleDeleteProblem}/>
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
