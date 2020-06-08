import React from 'react'


export const selectTask = (task) => {
    return{
        type:'SELECT_TASK',
        payload:task
    }
}