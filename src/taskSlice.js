import { createSlice } from "@reduxjs/toolkit"

export const TaskSlice=createSlice(
    {
        name:"task",
        initialState: {
           tasks:[{id:"1",description:"doing work",isDone:"false"}
        ,{id:"1",description:"playing",isDone:"false"}]
        },
        reducers:{
            addTask:(state,action)=>{
                  state.tasks.push(action.payload)  
            },

        }
    }
)

export const {addTask} = TaskSlice.actions
export default TaskSlice.reducer