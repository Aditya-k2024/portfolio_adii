import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-transition projects-page">
            <div className="projects-page__bg">
                <img src="/ShieldX.png" alt="" className="projects-page__bg-img" />
            </div>
            <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - var(--footer-height, 100px))' }}>
                <div className="section__container">
                    <h1 className="section__title" style={{ marginBottom: '0.5rem' }}>All Projects</h1>
                    <p className="section__subtitle">A complete list of things I've built</p>

                    <div className="projects__grid">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;
