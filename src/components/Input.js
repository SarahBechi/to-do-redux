import { connect } from 'react-redux';
import React, { Component } from 'react';
import './style.css';

class Input extends Component {
    render() {

        return (<div>
            <div className="to-do-app">
                <span className="to-do">To-Do App!</span>
                <span className="new-element">Add New To-Do</span>
                <input type="text" className="enter-task" onChange={(e) => this.props.changeInput(e)}></input>
                <span className="add-btn" onClick={() => this.props.addItem(this.props.inputReducer)} >Add </span>
            </div>
        </div>)

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (val) => {
            dispatch({ type: 'ADD-LIST', newText: val })

        },

        changeInput: (e) => {
            dispatch({ type: "CHANGE-INPUT", val: e.target.value })

        },
    }
}


const mapStateToProps = ({ inputReducer }) => {
    return {

        inputReducer: inputReducer,

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Input)