import { Header } from "./components/Header"
import { AddTasks } from "./components/AddTasks" 
import { Contanier,Area,AreaTasks } from "./styled"
import { tasksSelector } from "./redux/hooks/userAppSelector"
import { Task } from "./components/Task"
import { useEffect, useState } from "react"
import { ListTasksType } from "./types/tasksTypes"
import { useDispatch } from "react-redux"
import { toUpdate } from "./redux/reducers/tasksReducer"

function App() {
  const listTasks = tasksSelector (state => state.tasks.ListTasks)
  const [newList,setNewList] =useState<ListTasksType[]>()
  const dispatch = useDispatch();
  
  useEffect(()=>{
    let newList = getList('listTasks');
    if(newList){
      dispatch(toUpdate(newList))
    }
  },[listTasks.length])

  const getList = (key:string)=>{
    const storage = localStorage.getItem(key)
    return storage ? JSON.parse(storage):false
  }
  
  return(
      <Contanier>
        <Area>
          <Header/>
          <AddTasks/>
          {listTasks.length > 0 && 
            <AreaTasks>
              {listTasks.map((i,k)=>(
                <Task 
                  key={k} 
                  data={i}
                  index={k}
                />
              ))}
            </AreaTasks>
          }
        </Area>
      </Contanier>
  )
}

export default App
