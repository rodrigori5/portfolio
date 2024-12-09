import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
  return (
    <section className="projects-section" id='projects'>
      <article className="project-wrapper">
        <div className="project-content">
          <p className="project-overline">
            Featured Project
          </p>
          <h3 className="project-title">
            <a href="" rel="noopener noreferrer" target="_blank">
              Camping Fácil

            </a>
          </h3>
          <div className="project-description">
            <p>
            Landing page para um aplicativo de camping.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>Next.JS</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>React</li>
            <li>TailwindCSS</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/rodrigori5/CampingFacilPage" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ height: '1.5em' }} />
            </a>
            {/* <a href="" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ height: '1.5em' }} />
            </a> */}
          
          </div>
        </div>
        <div className="project-image">
          <a
            href="https://simpleplanets.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/campfacil.png"
              alt="Camping Fácil - Landing Page"
              width={700}
              height={438}
            />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Projects;