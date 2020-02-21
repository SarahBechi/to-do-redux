import { connect } from 'react-redux';
import React, { Component } from 'react';
import './style.css';

class List extends Component {

    render() {
        return (<div>

            <div className="items_list">
                {this.props.listReducer.map((item, i) => <div key={i} className="elt">

                    <span className="compeleteBtn" onClick={() => this.props.completeItem(i)} >{item.name}</span>
                    <span className="deleteBtn" onClick={() => this.props.deleteList(i)}>Delete</span>
                    <span className="theInput" style={{ textDecoration: (item.name === "compelete") ? 'none' : 'line-through' }}  >{item.val}</span>

                </div>)}
            </div>
        </div>)


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (i) => {
            dispatch({ type: 'DELETE-LIST', i })
        },

        completeItem: (i) => {
            dispatch({ type: 'COMPLETE-LIST', i })

        },

        addItem: (val) => {
            dispatch({ type: 'ADD-LIST', newText: val })

        },
    }
}


const mapStateToProps = ({ listReducer, inputReducer }) => {
    return {
        listReducer: listReducer,
        inputReducer: inputReducer,

    }
}













export default connect(mapStateToProps, mapDispatchToProps)(List)