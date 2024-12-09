import AboutParallax from "./AboutParallax";

const About = () => {
  return (
    <section className='about-section' id="about">
      <AboutParallax />
      <div className='about-inner'>
        <article className='top-left'>
          <div className="cavalier-content">
            <h1>Experiência</h1>
            <p>
              Sou desenvolvedor web com foco em PHP, CSS, JS e mySQL, atualmente estou estagiando no Instituto de Previdência do Estado do Rio Grande do Sul. No meu dia a dia, sou responsável pelo desenvolvimento e manutenção de websites, buscando sempre entregar soluções eficientes e funcionais.
            </p>
          </div>
        </article>
        <article className='middle-right'>
          <div className="cavalier-content">
            <h1>Formação / Cursos</h1>
            <p>
            Estou cursando Análise e Desenvolvimento de Sistemas na Uniasselvi e sempre busco me atualizar sobre tecnologias e boas práticas de desenvolvimento. Atualmente estou realizando cursos da área como Java Springboot, React com NextJS, Typescript, Laravel e criação de APIs que me permitem entregar mais produtos robustos e escaláveis.
            </p>
          </div>
        </article>
        <article className='bottom-left'>
          <div className="cavalier-content">
            <h1>Soft Skills</h1>
            <p>
            Gosto de trabalhar em equipe, aprender novas tecnologias e compartilhar conhecimentos. Acredito que a diversidade de perspectivas e experiências é fundamental para a inovação e a qualidade dos projetos..
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About;