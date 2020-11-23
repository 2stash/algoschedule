import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  width:280px;
  ${'' /* height: 50px; */}
`;

export default class Task extends React.Component {
  render() {
    console.log(this.props.title)
    const columnCategory = this.props.title;
    const columnTitle = this.props.data[columnCategory].title;
    console.log(columnTitle)
    return (
      <Draggable draggableId={this.props.title} index={this.props.index}>
      {(provided)=> (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >{columnTitle}</Container>
      )}
 
      </Draggable>
    );
  }
}
