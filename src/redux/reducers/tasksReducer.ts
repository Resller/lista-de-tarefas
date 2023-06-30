import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ListTasksType } from "../../types/tasksTypes";

const initialState:ListTasksType = {
    ListTasks:[]
}

export const slice = createSlice({
    name:'ListTask',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            const {task,id,done } = action.payload;
            state.ListTasks.push({task,id,done})
        },
        changeDone : (state,action)=>{
            const {index,done} = action.payload
            state.ListTasks[index].done = done
        },
        remove:(state,action)=>{
            const {index} = action.payload
            state.ListTasks.splice(index,1)
        },
        toUpdate:(state,action)=>{
            state.ListTasks = action.payload
        }
    }
})
export const {addTask,changeDone,remove,toUpdate} = slice.actions
export default slice.reducer