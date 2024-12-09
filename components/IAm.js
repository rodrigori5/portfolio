import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IAm = () => {
  return (
    <section className='intro-section'>
      <article className='intro-text'>
        <p>Olá, eu sou o</p>
        <h1>RODRIGO N. MACHADO</h1>
        <p className="adjust">Desenvolvedor de sofware</p>
      </article>
      <div className='CTAs'>
        <a className='download-resume' href="/rodrigoCV89-PT-BR.pdf">Currículo</a>
        <div className='socials'>
          <a href={"https://www.linkedin.com/in/rodrigo-nascimento-machado-011/"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={"https://github.com/rodrigori5"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          
        </div>
      </div>
      <article className='some-details'>
       
        <p>Estou sempre em busca de novos desafios e oportunidades.</p>
      </article>
    </section>
  )
}

export default IAm;