import React,{useState,useEffect} from 'react';
import { Button,List,Space,Input,Checkbox } from 'antd';
import {DeleteOutlined,PlusOutlined } from '@ant-design/icons'
// google fonts


const TodobyReact = () => {
         const [tasks,setTasks] = useState([]);
         const [newTasks,setNewtasks] = useState('');
         const [editTaskId,setEditTaskId] = useState(null);
         const [editedTaskText,setEditedTaskText] = useState('');
        //  stored data 
         useEffect(()=>{
             const storedTasks = JSON.parse(localStorage.getItem('tasks'))||[]
            setTasks(storedTasks)
            },[])
            useEffect(()=>{
                 localStorage.setItem('tasks',JSON.stringify(tasks))
            },[tasks])
            // function to add input from user
             const addInput = ()=>{
                if(newTasks.trim()!==""){
                    setTasks([...tasks,{id:Date.now(),text:newTasks,completed:false}])
                };
                setNewtasks('') //this is because after we put the input field,it clear the field
             }
            //  function to delete input 
              const deleteInput = (taskID)=>{
                const updatedTasks = tasks.filter((task)=>task.id!==taskID);
                 setTasks(updatedTasks)
              }
              const toggleTaskCompletion = (taskID)=>{
                 const updatedTasks = tasks.map((task)=>task.id===taskID?{...task,completed:!task.completed}:task);
                  setTasks(updatedTasks)
              }
               const startEdit = (taskID,taskText)=>{
                 setEditTaskId(taskID);
                 setEditedTaskText(taskText)
               }
               const finishEdit = ()=>{
                 const updatedTasks = tasks.map((task)=>
                 task.id===editTaskId?{...task,text:editedTaskText}:task
                 );
                  setTasks(updatedTasks);
                  setEditTaskId(null)
                  setEditedTaskText("")
               }
    return (
                
        <div className="todo-container" >
      <h1>Todo List  by <code style={{color:"red"}}>localStorage</code> </h1>
      <div className="add-task-container">
        <Input
          placeholder="Enter a new task"
          
          onChange={(e) => setNewtasks(e.target.value)}
        />
        <Button type="primary" onClick={addInput}>
          Add Task <PlusOutlined />
        </Button>
      </div>
     
      <List className='task-list'>
                   {tasks.map((task)=>(
                       <List.Item key={task.id} >
                        <Checkbox
       checked={task.completed} onChange={()=>toggleTaskCompletion(task.id)}
      >
   
      </Checkbox>
                           

                           {/* for edit */}
                      


                            {editTaskId===task.id ?(
                               <Input type='text' value={editedTaskText} 
                               onChange={(e)=>setEditedTaskText(e.target.value)}
                               onBlur={finishEdit}
                               autoFocus
                            //    style={{width:"100%"}}
                              />
                            ):(
                              <span
                              style={{textDecoration:task.completed?'line-through':'none'}}
                              onDoubleClick={()=>startEdit(task.id,task.text)}
                              
                              >{task.text}</span>
                              )}
                           
                                 
                            <Button onClick={()=>deleteInput(task.id)} danger type='primary' >
                                Delete<DeleteOutlined /></Button>
                            
                            
                     </List.Item>
                   ))}
                </List>
               
       
       
             
         
        
      
    </div>
    );
}

export default TodobyReact;
