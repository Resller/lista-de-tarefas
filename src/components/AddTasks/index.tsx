
import SvgPlus from "../../assets/svg/SvgPlus"
import { AreaAddTasks } from "./styled"

import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addTask } from "../../redux/reducers/tasksReducer"
import { tasksSelector } from "../../redux/hooks/userAppSelector"

export const AddTasks = ()=>{
    const [task,setTask] = useState<string>('')
    const listTasks = tasksSelector (state => state.tasks.ListTasks)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(listTasks.length > 0){
            localStorage.setItem('listTasks',JSON.stringify(listTasks))
        }
    },[listTasks.length])

    const addNewTask = (e:string)=>{
       if(e === 'Enter' && task !==''){
            dispatch(addTask({task,id:listTasks.length,done:false}))
            setTask('');
       }
    }
    return(
        <AreaAddTasks>
            <div className="img"><SvgPlus/></div>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa "
                onChange={e=>setTask(e.target.value)}
                onKeyUp={e=>addNewTask(e.code)}
                value={task}
            />
        </AreaAddTasks>
    )
}