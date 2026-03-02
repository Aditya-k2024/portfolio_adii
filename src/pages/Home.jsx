import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact,
    SiFastapi, SiPostgresql, SiMongodb, SiNodedotjs, SiExpress,
    SiGit, SiDocker, SiLinux, SiVercel, SiRender, SiGithub,
    SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch,
    SiOpencv, SiStreamlit, SiQt, SiArduino, SiPlatformio
} from 'react-icons/si'
import { FaPython, FaBrain, FaChartBar, FaRobot } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import ProjectCard from '../components/ProjectCard'
import AnimatedBackground from '../components/AnimatedBackground'
import projects from '../data/projects'
import achievements from '../data/achievements'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Home() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100) // Small delay to ensure render is complete
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <main>
            {/* Hero Section */}
            <section className="hero" id="hero">
                <div className="hero__bg">
                    <img src="/hero-bg.jpg" alt="" className="hero__bg-img" />
                </div>
                <AnimatedBackground />
                <div className="hero__container">
                    <div className="hero__content">
                        <motion.div
                            className="hero__text"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.p variants={fadeUp} className="hero__greeting">Hi, I'm</motion.p>
                            <motion.h1 variants={fadeUp} className="hero__name">Aditya Kumar</motion.h1>
                            <motion.div variants={fadeUp}>
                                <TypeAnimation
                                    sequence={[
                                        'Machine Learning & AI', 1000,
                                        'IoT & Robotics', 1000,
                                        'NLP', 1000,
                                        'Computer Vision', 1000,


                                    ]}
                                    wrapper="p"
                                    speed={50}
                                    className="hero__title"
                                    repeat={Infinity}
                                />
                            </motion.div>
                            <motion.p variants={fadeUp} className="hero__tagline">
                                I build robust, user-centric applications with clean code and thoughtful architecture.
                            </motion.p>
                            <motion.div variants={fadeUp} className="hero__actions">
                                <a href="#projects" className="btn btn--solid" onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    View Projects
                                </a>
                                <a href="#contact" className="btn btn--outline" onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    Get in Touch
                                </a>
                            </motion.div>

                            <motion.div variants={fadeUp} className="hero__socials" style={{ marginTop: '2.5rem', marginBottom: '0' }}>
                                <a href="https://github.com/Aditya-k2024" target="_blank" rel="noopener noreferrer" className="hero__social hero__social--github" aria-label="GitHub">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/aditya-kumar-107a9532a/" target="_blank" rel="noopener noreferrer" className="hero__social hero__social--linkedin" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/adityakumar" target="_blank" rel="noopener noreferrer" className="hero__social hero__social--twitter" aria-label="Twitter/X">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="mailto:aditya.k.bitsindri@gmail.com" className="hero__social hero__social--email" aria-label="Email">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <span></span>
                </div>
            </section>

            {/* About Section */}
            <section className="section section--about" id="about">
                <div className="about__bg">
                    <img src="/hero-bg.jpg" alt="" className="about__bg-img" />
                </div>
                <div className="section__container">
                    <h2 className="section__title">About Me</h2>
                    <div className="about__content">
                        <p>
                            I'm a software developer specializing in Machine Learning and IoT, passionate about building intelligent systems that bridge the physical and digital worlds. My approach centers on writing clean code and creating seamless hardware-software integrations.
                        </p>
                        <p>
                            I thrive on tackling complex challenges across the entire development lifecycle. My work ranges from designing real-time GUIs and sensor dashboards for IoT projects like ShieldX, to engineering AI solutions like NLP tools, computer vision pipelines, and intelligent monitoring systems like GeoWatch AI.
                        </p>
                        <p>
                            When I'm not coding, you'll find me competing in hackathons, exploring robotics and UAVs, or diving into advanced deep learning architectures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section section--alt" id="skills">
                <div className="section__container">
                    <h2 className="section__title">Skills & Technologies</h2>
                    <div className="skills__grid">
                        <div className="skills__category">
                            <h3 className="skills__category-title">Frontend</h3>
                            <div className="skills__tags">
                                {[
                                    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                                    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
                                    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
                                    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
                                ].map(skill => (
                                    <span key={skill.name} className="skills__tag">
                                        <skill.icon style={{ color: skill.color }} className="skills__icon" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="skills__category">
                            <h3 className="skills__category-title">Backend</h3>
                            <div className="skills__tags">
                                {[
                                    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
                                    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                                    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
                                ].map(skill => (
                                    <span key={skill.name} className="skills__tag">
                                        <skill.icon style={{ color: skill.color }} className="skills__icon" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="skills__category">
                            <h3 className="skills__category-title">Tools & DevOps</h3>
                            <div className="skills__tags">
                                {[
                                    { name: 'Git', icon: SiGit, color: '#F05032' },
                                    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
                                    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
                                    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
                                    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
                                    { name: 'Render', icon: SiRender, color: '#46E3B7' }
                                ].map(skill => (
                                    <span key={skill.name} className="skills__tag">
                                        <skill.icon style={{ color: skill.color }} className="skills__icon" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="skills__category">
                            <h3 className="skills__category-title">IoT & Hardware</h3>
                            <div className="skills__tags">
                                {[
                                    { name: 'PySide6', icon: SiQt, color: '#41CD52' },
                                    { name: 'PyQt', icon: SiQt, color: '#41CD52' },
                                    { name: 'Arduino', icon: SiArduino, color: '#00979D' },
                                    { name: 'Platform.IO', icon: SiPlatformio, color: '#FA6A00' }
                                ].map(skill => (
                                    <span key={skill.name} className="skills__tag">
                                        <skill.icon style={{ color: skill.color }} className="skills__icon" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="skills__category skills__category--highlight">
                            <h3 className="skills__category-title">Machine Learning & AI</h3>
                            <div className="skills__tags">
                                {[
                                    { name: 'Python', icon: FaPython, color: '#3776AB' },
                                    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
                                    { name: 'Pandas', icon: SiPandas, color: '#150458' },
                                    { name: 'Matplotlib', icon: BsGraphUp, color: '#11557c' },
                                    { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
                                    { name: 'Deep Learning', icon: FaBrain, color: '#FF6F00' },
                                    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
                                    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
                                    { name: 'Computer Vision', icon: FaRobot, color: '#00A67E' },
                                    { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
                                    { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' }
                                ].map(skill => (
                                    <span key={skill.name} className="skills__tag">
                                        <skill.icon style={{ color: skill.color }} className="skills__icon" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section section--alt section--projects" id="projects">
                <div className="projects__bg">
                    <img src="/helmet.jpeg" alt="" className="projects__bg-img" />
                </div>
                <div className="section__container">
                    <h2 className="section__title">Projects</h2>
                    <p className="section__subtitle">A selection of things I've built</p>
                    <div className="projects__grid">
                        {projects.slice(0, 2).map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="projects__view-more">
                        <Link to="/projects" className="btn btn--outline">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section section--alt section--experience" id="experience">
                <div className="experience__bg">
                    <img src="/victory.jpeg" alt="" className="experience__bg-img" />
                </div>
                <div className="section__container">
                    <h2 className="section__title">Experience</h2>
                    <div className="timeline">
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <span className="timeline__date">2025 — Present</span>
                                <h3 className="timeline__title">Applied ML Engineer</h3>
                                <p className="timeline__desc">
                                    I'm an Applied ML Engineer specializing in building intelligent systems that bridge the gap between hardware and software. I thrive on designing end-to-end pipelines—from training computer vision and NLP models to deploying them alongside real-time IoT monitoring systems like GeoWatch AI.
                                </p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <span className="timeline__date">2025</span>
                                <h3 className="timeline__title">Hackathon Participant & Winner</h3>
                                <p className="timeline__desc">
                                    Participated in 3+ hackathons—securing a win in one—along with a top finish at an IoT exhibition. Developed rapid hardware-software prototypes, including real-time IoT sensor dashboards and predictive machine learning pipelines.
                                </p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <span className="timeline__date">2024 — 2025</span>
                                <h3 className="timeline__title">Started</h3>
                                <p className="timeline__desc">
                                    Just beginning my programming journey, my focus is on rapid learning and practical application. I am dedicated to mastering core technologies, exploring the open-source ecosystem, and turning complex concepts into tangible projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="section section--alt section--achievements" id="achievements">
                <div className="achievements__bg">
                    <img src="/victory-2.jpeg" alt="" className="achievements__bg-img" />
                </div>
                <div className="section__container">
                    <h2 className="section__title">Achievements</h2>
                    <p className="section__subtitle">Milestones and competitive highlights</p>
                    <div className="achievements__grid">
                        {achievements.map((item) => (
                            <div className="achievement-card" key={item.id}>
                                <div className="achievement-card__content">
                                    <div className="achievement-card__header">
                                        <h3 className="achievement-card__title">{item.title}</h3>
                                        <span className="achievement-card__date">{item.date}</span>
                                    </div>
                                    <p className="achievement-card__desc">{item.description}</p>
                                </div>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hero__social hero__social--linkedin" style={{ marginTop: 'auto' }} aria-label={item.linkText}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section" id="contact">
                <div className="section__container">
                    <h2 className="section__title">Get In Touch</h2>
                    <p className="contact__text">
                        I'm always open to discussing new projects, ideas, or opportunities.
                        Feel free to reach out through any of the channels below.
                    </p>
                    <div className="contact__links">
                        <a href="mailto:aditya.k.bitsindri@gmail.com" className="contact__link contact__link--email" aria-label="Email">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                            </svg>
                        </a>
                        <a href="https://github.com/Aditya-k2024" target="_blank" rel="noopener noreferrer" className="contact__link contact__link--github" aria-label="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-kumar-107a9532a/" target="_blank" rel="noopener noreferrer" className="contact__link contact__link--linkedin" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/adityakumar" target="_blank" rel="noopener noreferrer" className="contact__link contact__link--twitter" aria-label="Twitter/X">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
