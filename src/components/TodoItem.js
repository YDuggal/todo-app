import React, { Component } from "react";
import PropTypes from "prop-types";


const btnStyle = {
    background: "none",
    color: "#555",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
};

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    componentDidMount = (props) => {
        console.log(this.props.todo);
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        defaultChecked={completed}
                        onChange={this.props.markComplete.bind(this, id)}
                    />{" "}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                        X
          </button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};


export default TodoItem;