import React from "react";
import { withStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  strikethroughText: {
    textDecoration: "line-through"
  },
  normalText: {
    textDecoration: "none"
  }
};
class TodoList extends React.Component {
  render() {
    const { classes, todos, toggleDoneOnTodo, deleteTodo } = this.props;

    return (
      <List className={classes.root}>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            dense
            button
            onClick={() => toggleDoneOnTodo(index)}
          >
            <ListItemText
              primary={todo.text}
              className={
                todo.done ? classes.strikethroughText : classes.normalText
              }
            />
            {todo.done && (
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
