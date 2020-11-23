import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

class CategorySortColumn extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <Container>
        <Title>Sort by Category</Title>
        <Droppable droppableId='category-sort'>
        {(provided)=> (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.columnList.map((columnId, index) => (
              <Task key={columnId} title={columnId} index={index} data={this.props.data}/>
            ))}
            {provided.placeholder}
          </TaskList>

        )}


        </Droppable>
      </Container>
    );
  }
}

export default CategorySortColumn;
