import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    idade: "",
    instagram: "",
    github: "",
    pensamento: "",
    defeito: "",
    ultimaSerie: "",
    ultimoFilme: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    time: "",
    email: "",
    password: ""
  });

  const onSubmitHandle = () => {
    nome: "",
    telefone: "",
    idade: "",
    instagram: "",
    github: "",
    pensamento: "",
    defeito: "",
    ultimaSerie: "",
    ultimoFilme: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    time: "",
    email: "",
    password: ""
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarForms = (e) => {
    e.preventDefault();

    fetch('https://www.api.alanleiser.com/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => console.log("Resposta da API:", data))
      .catch(err => console.log("Erro:", err));

    console.log("ENVIADO:", form);
  };

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

      {/* AGORA TODO MUNDO ESTÁ EM UM ÚNICO FORM */}
      <form onSubmit={enviarForms}>

        <div className='div_3'>

          <div className='div_label'>
            <label>Nome</label>
            <input name="nome" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Telefone</label>
            <input name="telefone" type="number" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Idade</label>
            <input name="idade" type="date" onChange={handleChange} />
          </div>

        </div>

        <div className='div_3'>
          <div className='div_label'>
            <label>Instagram</label>
            <input name="instagram" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>GitHub</label>
            <input name="github" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Pensamento</label>
            <input name="pensamento" type="text" onChange={handleChange} />
          </div>
        </div>

        <div className='div_3'>
          <div className='div_label'>
            <label>Defeito</label>
            <input name="defeito" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Ultima série assistida</label>
            <input name="ultimaSerie" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Ultimo filme assistido</label>
            <input name="ultimoFilme" type="text" onChange={handleChange} />
          </div>
        </div>

        <div className='div_3'>
          <div className='div_label'>
            <label>Ultimo jogo jogado</label>
            <input name="ultimoJogo" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Música favorita</label>
            <input name="musica" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Gênero</label>
            <input name="genero" type="text" onChange={handleChange} />
          </div>
        </div>

        <div className='div_3'>
          <div className='div_label'>
            <label>Habilidade especial</label>
            <input name="habilidadeEspecial" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Poder especial</label>
            <input name="poderEspecial" type="text" onChange={handleChange} />
          </div>

          <div className='div_label'>
            <label>Time que torce</label>
            <input name="time" type="text" onChange={handleChange} />
          </div>
        </div>

        <div className='cadastro'>
          <h2>CADASTRO</h2>

          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Senha</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="register">
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </div>

      </form>
    </>
  );
}

export default App;