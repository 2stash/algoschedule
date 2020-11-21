import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  width:280px;
  height: 50px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
  "name name name name name name trash color";
`;


export default class Task extends React.Component {

  render() {
    let color;
    if (this.props.task.difficulty === "Easy") {
      color = "#34ed43";
    } else if (this.props.task.difficulty === "Medium") {
      color = "#51adef";
    } else if (this.props.task.difficulty === "Hard") {
      color = "#ef5151";
    }

    let strikeThrough;
    if(this.props.task.filter === true){
      strikeThrough = 'line-through'
    } else {
      strikeThrough = '';
    }

    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <h4 className='name' style={{textDecoration: strikeThrough}}>{this.props.task.title}</h4>
            <span className='trash' onClick={() => this.props.handleDeleteProblem(this.props.task.id)}>
              <i className='fas fa-trash'></i>
            </span>
            <span
              className='grabber-div'
              style={{ backgroundColor: color }}
            ></span>
          </Container>
        )}
      </Draggable>
    );
  }
}
