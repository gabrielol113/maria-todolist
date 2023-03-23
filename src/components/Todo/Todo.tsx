import React from 'react';
import style from './styles.module.scss';
import { FaRegTrashAlt } from 'react-icons/fa'

function Todo({description, toggleComplete, deleteTodo }){

    return(
        <li className={description.completed? style.licompleted:style.liNotCompleted}>
            <div className={style.row}>
                <input onChange={ () => toggleComplete(description)} type='checkbox' checked={description.completed? true: false}/>
                <p onClick={ () => toggleComplete(description)} className={description.completed? style.textCompleted:style.text }>{description.text}</p>
            </div>
            <button onClick={()=> deleteTodo(description.id)}>{<FaRegTrashAlt size={30}/>}</button>
        </li>
    )
}

export default Todo;