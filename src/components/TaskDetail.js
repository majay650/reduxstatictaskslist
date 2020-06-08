import React from 'react'
import { connect } from 'react-redux'


const TaskDetail = ({userSelectedTask}) => {
    if(!userSelectedTask){
        return <div>Click on any task to view detail</div>
    }
    return(
        <div>{userSelectedTask.title}</div>
    )
}


const mapStateToProps = (state) => {
    return{
        userSelectedTask: state.selectedTask
    }
}

export default connect(mapStateToProps)(TaskDetail)