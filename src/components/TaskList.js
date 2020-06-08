import React from 'react'
import { connect } from 'react-redux'
import {selectTask} from '../actions'

class TaskList extends React.Component {

    listOfTasks = this.props.tasks.map(task => {
        return(
            <div key={task.title}>
            <div>
            <br></br>
            {task.title}
            &emsp; &emsp; &emsp; &emsp;
            <button type="submit" 
            onClick={() => this.props.userClickedTask(task)}>SELECT TASK</button>
            </div>
            </div>
        )
    })
    render() {
        return (
            <div>{this.listOfTasks}</div>
        )
    }
}

const mapStateToProps = (state) => {
        return ({tasks:state.allTasks})
}

export default connect(mapStateToProps, {
    userClickedTask: selectTask
})(TaskList)