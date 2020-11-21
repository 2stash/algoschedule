import React, { Fragment } from "react";
import initialData from "./initial-data";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Options from "./Options";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow:hidden;
  padding: 10px;
  margin: 10px;
`;

class DndProblems extends React.Component {
  state = initialData;

  handleSetCategoryFalse = () => {
    if(this.state.sorting === false ){
      return
    }
    const newState = {
      ...this.state,
      sorting: false,
    };
    this.setState(newState);
  };

  handleSetCategoryTrue = () => {
    if(this.state.sorting === true ){
      return
    }
    const newState = {
      ...this.state,
      sorting: true,
    };
    this.setState(newState);
  };

  handleSetSchedule = () => {
    let tempArray = [];

    if(this.state.sorting === false){
      this.state.columnOrder.map((columnId) => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => {
          if(this.state.tasks[taskId].filter ===true){
            return
          }
          tempArray.push(this.state.tasks[taskId])
        })
      })
    } else {
      this.state.columnCategoryOrder.map((columnId) => {
        const column = this.state.columnsCategoryList[columnId];
        const tasks = column.taskIds.map((taskId) => {
          tempArray.push(this.state.tasks[taskId])
        })
      })
    }
    this.props.handleSetSchedule(tempArray)
  };

  handleDeleteProblem = (id) => {
    const newState = {
      ...this.state,
      tasks: {...this.state.tasks,
        [id]: {
          ...this.state.tasks[id],
          filter:!this.state.tasks[id].filter,
        }
      },

    };
    this.setState(newState);
  };

  onDragEnd = (result) => {
    // from initial data: columnOrder = columnCategoryOrder
    // from initial data: columns  = columnsCategoryList
    let columnOrderSelector = "columnOrder";
    let columnsDataSelector = "columns";
    if (this.state.sorting === true) {
      columnOrderSelector = "columnCategoryOrder";
      columnsDataSelector = "columnsCategoryList";
    }

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state[columnOrderSelector]);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        [columnOrderSelector]: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state[columnsDataSelector][source.droppableId];
    const finish = this.state[columnsDataSelector][destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        [columnsDataSelector]: {
          ...this.state[columnsDataSelector],
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
    return;
  };

  render() {
    return (
      <Fragment>
        <Options 
        handleSetCategoryFalse={this.handleSetCategoryFalse
        } 
        handleSetCategoryTrue={this.handleSetCategoryTrue}
        handleSetSchedule={this.handleSetSchedule}
        />
        {this.state.sorting === false ? (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId='all-columns'
              direction='horizontal'
              type='column'
            >
              {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {this.state.columnOrder.map((columnId, index) => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(
                      (taskId) => this.state.tasks[taskId]
                    );

                    return (
                      <Column
                        key={column.id}
                        column={column}
                        tasks={tasks}
                        index={index}
                        handleDeleteProblem={this.handleDeleteProblem}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId='sort-columns'
              direction='horizontal'
              type='column'
            >
              {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {this.state.columnCategoryOrder.map((columnId, index) => {
                    const column = this.state.columnsCategoryList[columnId];
                    const tasks = column.taskIds.map(
                      (taskId) => this.state.tasks[taskId]
                    );

                    return (
                      <Column
                        key={column.id}
                        column={column}
                        tasks={tasks}
                        index={index}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </Fragment>
    );
  }
}

export default DndProblems;