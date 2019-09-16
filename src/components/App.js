import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center"
  },
  col: {
    flexDirection: "column"
  }
};

class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = todoText => {
    const todo = { text: todoText, done: false };
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  toggleDoneOnTodo = index => {
    const { todos } = this.state;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };
  deleteTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
  render() {
    const { todos } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.col}>
          <TodoForm addTodo={this.addTodo} className={classes.root}></TodoForm>
          <TodoList
            todos={todos}
            toggleDoneOnTodo={this.toggleDoneOnTodo}
            deleteTodo={this.deleteTodo}
          ></TodoList>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);
