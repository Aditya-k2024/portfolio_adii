import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import projects from '../data/projects'

function ProjectDetail() {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!project) {
        return (
            <main className="project-detail">
                <div className="section__container">
                    <div className="project-detail__not-found">
                        <h2>Project not found</h2>
                        <Link to="/" className="btn btn--primary">Back to Home</Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="project-detail">
            {project.image && (
                <div className="project-detail__bg">
                    <img src={project.image} alt="" className="project-detail__bg-img" />
                </div>
            )}
            <div className="section__container">
                <Link to="/#projects" className="project-detail__back">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 10H5M5 10L9 6M5 10L9 14" />
                    </svg>
                    Back to Projects
                </Link>

                <header className="project-detail__header">
                    <h1 className="project-detail__title">{project.title}</h1>
                    <p className="project-detail__overview">{project.overview}</p>
                    <div className="project-detail__links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                
                            </a>
                        )}
                        {project.linkedin && (
                            <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                
                            </a>
                        )}
                        {(project.link || (project.live && project.live !== '#')) && (
                            <a href={project.link || project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </header>

                <div className="project-detail__grid">
                    <div className="project-detail__section">
                        <h2 className="project-detail__section-title">Tech Stack</h2>
                        <div className="project-detail__tags">
                            {project.techStack.map(tech => (
                                <span key={tech} className="project-detail__tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-detail__section">
                        <h2 className="project-detail__section-title">Key Features</h2>
                        <ul className="project-detail__list">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-detail__section">
                        <h2 className="project-detail__section-title">Learnings</h2>
                        <p>{project.learnings}</p>
                    </div>

                    <div className="project-detail__section">
                        <h2 className="project-detail__section-title">Challenges</h2>
                        <p>{project.challenges}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectDetail
