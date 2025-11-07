import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mudancaDeEmail = (e) => {
    setEmail(e.target.value);
  }
  const mudancaDePassword = (e) => {
    setPassword(e.target.value);
  }

  const enviarForms = (e) => {
    e.preventDefault()
    fetch('https://www.api.alanleiser.com/user', {
      method:'POST',
      body:JSON.stringify()
    })
    console.log(`Email: ${email}, Senha: ${senha}`)

    
  }

useEffect(() => {
    fetch("https://www.api.alanleiser.com/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('error'))
}, []);

  return (
    <>
      <div>
        <h1>FORMULÁRIO</h1>
      </div>

      <div className='div_3'>

        <div className='div_label' >
          <label htmlFor="">Nome</label>
          <input type="text" placeholder='Nome' />
        </div>


        <div className='div_label'>
          <label htmlFor="">Telefone</label>
          <input type="number" placeholder='Telefone' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Idade</label>
          <input type="date" placeholder='Idade' />
        </div>

      </div>

      <div className='div_3'>
        <div className='div_label'>
          <label htmlFor="">Instagram</label>
          <input type="text" placeholder='Instagram' />
        </div>

        <div className='div_label'>
          <label htmlFor="">GitHub</label>
          <input type="text" placeholder='GitHub' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Pensamento</label>
          <input type="text" placeholder='Pensamento' />
        </div>
      </div>

      <div className='div_3'>
        <div className='div_label'>
          <label htmlFor="">Defeito</label>
          <input type="text" placeholder='Defeito' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Ultima série assistida</label>
          <input type="text" placeholder='Ultima série assistida' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Ultima filme assistida</label>
          <input type="text" placeholder='Ultima filme assistida' />
        </div>
      </div>

      <div className='div_3'>
        <div className='div_label'>
          <label htmlFor="">Ultimo jogo jogado</label>
          <input type="text" placeholder='Ultimo jogo jogado' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Música favorita</label>
          <input type="text" placeholder='Música favorita' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Genero</label>
          <input type="text" placeholder='Genero' />
        </div>
      </div>

      <div className='div_3'>
        <div className='div_label'>
          <label htmlFor="">Habilidade especial</label>
          <input type="text" placeholder='Habilidade especial' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Poder especial</label>
          <input type="text" placeholder='Poder especial' />
        </div>

        <div className='div_label'>
          <label htmlFor="">Time que torce</label>
          <input type="text" placeholder='Time que torce' />



        </div>

       

      </div>
      <div className='cadastro'>
        <h2>CADASTRO</h2>
        <form onSubmit={enviarForms}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => mudancaDeEmail(e)} />
        </form>

        <form onSubmit={enviarForms}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => mudancaDePassword(e)} />

          <div className="register">
            <button className="button" type="submite">Cadastrar</button>
          </div>
        </form>
      </div>


    </>
  )
}

export default App
