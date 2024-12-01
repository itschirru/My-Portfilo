import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Portfolio() {
    const [aboutText, setAboutText] = useState(
        "Hello! I'm [Your Name], a passionate developer with expertise in [Your Skills]. I enjoy creating innovative and user-friendly solutions."
    );

    // Load saved content from localStorage on component mount
    useEffect(() => {
        const savedContent = localStorage.getItem('aboutText');
        if (savedContent) {
            setAboutText(savedContent);
        }
    }, []);

    // Save the edited content to localStorage
    const saveContent = () => {
        localStorage.setItem('aboutText', aboutText);
        alert('Changes saved!');
    };

    return (
        <div>
            <header className="header">
                <div className="container">
                    <h1>My Portfolio</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="about" className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <p
                        contentEditable
                        className="editable-text"
                        onInput={(e) => setAboutText(e.currentTarget.textContent)}
                        suppressContentEditableWarning={true}
                    >
                        {aboutText}
                    </p>
                    <button onClick={saveContent}>Save Changes</button>
                </div>
            </section>

            <section id="projects" className="projects">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="project-list">
                        <div className="project">
                            <h3>Project 1</h3>
                            <p>A brief description of the project.</p>
                        </div>
                        <div className="project">
                            <h3>Project 2</h3>
                            <p>A brief description of the project.</p>
                        </div>
                        <div className="project">
                            <h3>Project 3</h3>
                            <p>A brief description of the project.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out for collaboration or inquiries:</p>
                    <a href="mailto:your-email@example.com" className="email-link">your-email@example.com</a>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Your Name. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <>
            <div>
                <img src={viteLogo} alt="Vite logo" />
                <img src={reactLogo} alt="React logo" />
                {/* Portfolio Component */}
                <Portfolio />
            </div>
        </>
    );
}

export default App;
