import { useEffect, useState } from 'react'
import './App.css'

// Tipo para funcionários
type FuncionarioType = {
  id: number,
  nomeFuncionario: string,
  areaEspecializacao: string,
  email: string,
  telefone: string,
  imagem: string
}

function App() {
  const [funcionarios, setFuncionarios] = useState<FuncionarioType[]>([])


  // useEffect para carregar produtos e usuários
  useEffect(() => {
      // Buscar os funcionarios
    fetch("http://localhost:8000/funcionarios")
    .then(resposta => resposta.json())
    .then(dados => setFuncionarios(dados))
  }, [])

  return (
    <>

      <header className="site-header">


        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-button">Login</button>
        </div>
      </header>
     
      {/* Listagem de Funcionários */}
      <div className="funcionarios-container">
        <h1 className='titulo-funcionario'>Funcionários</h1>
        <div className="funcionarios-list">
          {
            funcionarios.map(funcionario => (
              <div key={funcionario.id} className="funcionario-item">
               <div className='container-imagem'>
                  <img src={funcionario.imagem} alt="Foto funcionario" />
                </div>
                <h1 className="funcionario-nome">{funcionario.nomeFuncionario}</h1> {/* Use h3 para o nome do produto */}
                <p className="funcionario-area_especializacao">Área de especialização: {funcionario.areaEspecializacao}</p>
                <p className="funcionario-email">Email: {funcionario.email}</p>
                <p className="funcionario-telefone">{funcionario.telefone}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App