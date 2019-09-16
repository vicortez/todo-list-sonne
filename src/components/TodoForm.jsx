import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import React from "react";

const styles = {
  textField: {
    margin: "0px 10px 0px 10px"
  }
};

class TodoForm extends React.Component {
  state = {
    todoTyped: ""
  };

  handleInputChange = event => {
    this.setState({ todoTyped: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todoTyped);
    this.setState({ todoTyped: "" });
  };

  render() {
    const { todoTyped } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={todoTyped}
            autoFocus
            placeholder="Digite um novo TODO"
            onChange={this.handleInputChange}
            className={classes.textField}
          ></TextField>
          <Button
            variant="outlined"
            className={classes.button}
            disabled={!!!todoTyped}
            type="submit"
          >
            Criar TODO
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TodoForm);
