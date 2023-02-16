import { useState } from 'react';
import {db} from '../FirebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'



const  Formulario = () => {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){

    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // }).then(() =>{console.log("Dados registrados no banco Firebase")}).catch((error) => {console.log("Gerou erro!!" + error.message)});
    
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      alert("CADASTRADO COM SUCESSO")
      setAutor('');
      setTitulo('')
    })
    .catch((error) => {
      console.log("ERRO " + error)
    })
  }
  return (
    <div>
      <h1>Curso de React com Firebase 2023 :) !!!</h1>

      <div className="container-fluid">
        
            <label className="form-label">Título:</label>
            <input type="text" className="form-control" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <label className='form-label'>Autor:</label>
            <input className="form-control" type="text" placeholder="Digite o autor" value={autor} onChange={(e) => setAutor(e.target.value)}/><br></br>
            <button className="btn btn-primary" onClick={handleAdd}>Cadastrar</button>
        
        </div>
    </div>
  );
}

export default Formulario;



 