import { useState } from 'react';
import {db} from './FirebaseConnection';
import {doc, setDoc} from 'firebase/firestore';
import './app.css';


const  App = () => {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){

    await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      autor: autor,
    }).then(() =>{console.log("Dados registrados no banco Firebase")}).catch((error) => {console.log("Gerou erro!!" + error.message)});
    
  }
  return (
    <div>
      <h1>Curso de React com Firebase 2023 :) !!!</h1>

      <div className="container">
      <label>Título:</label>
      <input type="text" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

      <label>Autor:</label>
      <input type="text" placeholder="Digite o autor" value={autor} onChange={(e) => setAutor(e.target.value)}/>
      <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
