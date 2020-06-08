import React from 'react'
import { combineReducers } from 'redux'

const allTasksReducer = () => {
    return [
        {title:'red task', description:'rrrrr', color:'red'},
        {title:'blue task', description:'bbbbb', color:'blue'},
        {title:'green task', description:'ggggg', color:'green'},
        {title:'orange task', description:'iooooooo', color:'orange'}
    ]
}

const selectedTaskReducer = (selectedTask=null, action) => {
if(action.type==='SELECT_TASK'){
    return action.payload
}
return selectedTask
}

export default combineReducers({
    allTasks: allTasksReducer,
    selectedTask: selectedTaskReducer
})