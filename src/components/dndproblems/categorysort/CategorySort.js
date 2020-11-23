import React, { Fragment } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import CategorySortColumn from "./CategorySortColumn";

const Container = styled.div`
  align-self:start;
  justify-content: center;
  position: -webkit-sticky; /* Safari */
  position:sticky;
  top:0;
  left:0;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(253, 220, 29, 1) 1%,
    rgba(131, 58, 180, 1) 43%,
    rgba(47, 173, 200, 1) 97%,
    rgba(253, 220, 29, 1) 99%
  );
`;

class CategorySort extends React.Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = source.droppableId;
    const newTaskIds = Array.from(this.props.columnList)

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId )
    
    this.props.setCategoryColumnOrder(newTaskIds)
  };

  render() {
    return (
      <Container>
      <DragDropContext onDragEnd={this.onDragEnd}>

          <CategorySortColumn columnList={this.props.columnList} data={this.props.data} />
 
      </DragDropContext>
      </Container>
    );
  }
}

export default CategorySort;
