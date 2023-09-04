import { func } from "prop-types";
import styles from "./css/todolist.css"
import { useState } from 'react'
import { useRef } from 'react'

function DeleteTodo({item, setTodoItems}) {

    function handleDeleteTodo(todo) {
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            // take care of deleting the todo
            setTodoItems((previousItems) => {
                return previousItems.filter((t) => t.id != todo.id);
            }

            );
        }
    }

    return (
        <span  style={{
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 10,
            cursor: "pointer",
        }} onClick={()=>{handleDeleteTodo(item)}}>X</span>
    );
}

function AddTodoItem({setTodoItems}) {

    const inputRef = useRef();

    function handleAddTodo(event) {

        event.preventDefault(); //避免默认的自动刷新
        const text = event.target.elements.addTodo.value

        if(text.length == 0) {
            return
        }

        const todo = {
            id: Math.random(),
            text: text,
            done: false,
        }

        console.log("handleAddTodo: " + JSON.stringify(todo))
        //previousItems 改变前已有的数数据, concat数组加入新的数据
        setTodoItems((previousItems)=>{
            console.log("todo.id: " + todo.id);
            return previousItems.concat(todo)
        })

        //event.target.elements.addTodo.value = "";
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
            <button type="submit" style={{marginLeft: 10}}>Submit</button>
        </form>
    );
}


function TodoItems({ items, setItems }) {

    //函数调用，不是组件调用，传参数不用加{}
    function handleToggle(clickedItem) {
        console.log(clickedItem.text)
        //clickedItem.done = true

        const updateTodoItems = items.map((t) => {
            return t.id === clickedItem.id ? { ...t, done: !t.done } : t
        });

        setItems(updateTodoItems)
    }

    if (items.length == 0) {
        return <p>No todos left!</p>
    }

    return (
        <ul className="list_with_dot">
            {items.map(item => {
                return <li key={item.id} style={{
                    textDecoration: item.done ? 'line-through' : '',
                }} onDoubleClick={()=>{handleToggle(item)}}>
                    {item.text}
                    <DeleteTodo item={item} setTodoItems={setItems} />
                </li>
            }
            )}
        </ul>
    );
}

export default function TodoList() {

    const [items, setItems] = useState([
        { id: 1, text: "Wash dishes", done: false },
        { id: 2, text: "Do laundry", done: false },
        { id: 3, text: "Take shower", done: false }
    ]);

    return (
        <div className={styles.App}>
            <h1>Todo List</h1>
            <TodoItems items={items} setItems={setItems}/>
            <AddTodoItem setTodoItems={setItems}/>
        </div>
    );
}