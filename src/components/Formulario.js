import { useState } from 'react';
import {db} from '../FirebaseConnection';
import { collection, addDoc} from 'firebase/firestore';
import '../app.css';



const  Formulario = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleAdd(){

       
    await addDoc(collection(db, "usuarios"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mensagem: mensagem
    })
    .then(() => {
      alert("CADASTRADO COM SUCESSO")
      setFirstName('');
      setLastName('');
      setEmail('');
      setMensagem('');
    })
    .catch((error) => {
      console.log("ERRO " + error)
    })
  }
  return (
    <div className="container">
      <h1>Curso de React com Firebase 2023 :) !!!</h1>

      <div className="container-fluid">
        
            <label className="form-label">Firstname:</label>
            <input type="text" className="form-control" placeholder="Digite o seu nome" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

            <label className='form-label'>Lastname:</label>
            <input className="form-control" type="text" placeholder="Digite o seu sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

            <label className="form-label">Email:</label>
            <input className="form-control" type="email" placeholder="Digite seu E_mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label">Mensagem:</label>
            <input className="form-control" type="text" placeholder="Digite a sua Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} /><br></br>
            <button className="btn btn-primary" onClick={handleAdd}>Cadastrar</button>
        
        </div>
    </div>
  );
}

export default Formulario;
