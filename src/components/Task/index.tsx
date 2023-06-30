import { useDispatch } from "react-redux";
import { tasksType } from "../../types/tasksTypes"
import { AreaTask } from "./styled"
import { changeDone, remove, toUpdate } from "../../redux/reducers/tasksReducer";
import SvgTrash from "../../assets/svg/SvgTrash";
import { tasksSelector } from "../../redux/hooks/userAppSelector";
import { useEffect } from "react";

type props ={
    data:tasksType;
    index:number
}

export const Task = ({data,index}:props)=>{
    const dispatch = useDispatch();
    const listTasks = tasksSelector(state=>state.tasks.ListTasks)
    
    useEffect(()=>{
        localStorage.setItem('listTasks',JSON.stringify(listTasks)) 
    },[data.done])
   
    const changeStatus = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeDone({index,done:e.target.checked}))
      
    }
    const removeTask = ()=>{
        dispatch(remove({index}))
        if(index === 0 && listTasks.length === 1) {
            localStorage.removeItem('listTasks')
        }   
    }
   
    return(
        <AreaTask done = {data.done}>
            <input 
                type="checkbox"
                onChange={(e)=>changeStatus(e)}
                checked={data.done}
            />
            <div className="txt">{data.task}</div>
            <div className="remove" onClick={removeTask}>
                <SvgTrash/>
            </div>
           
        </AreaTask>
    )
}