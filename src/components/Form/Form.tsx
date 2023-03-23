import styles from './styles.module.scss';
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
function Form({ role, db}){
    const [input, setInput] = useState('');
    //Create todo
    const createTodo = async (e,) =>{
        e.preventDefault();
        if(input === ''){
            alert('Adicione uma tarefa valida')
            return
        }
        await addDoc(collection(db, `${role}-todos`),{
            text: input,
            completed: false,
        })
        setInput('');

    }
    return(
    <form onSubmit={createTodo} className={styles.form}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Adicionar tarefa'/>
        <button><AiOutlinePlus size={30}/></button>
    </form>
    )
}

export default Form;