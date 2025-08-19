import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Job Simulations</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-header">
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_mrDqPxd5vMfi6t89y_1753450397248_completion_certificate.pdf" target="_blank" rel="noreferrer">
                        <h2>BCG: Data Science</h2>
                    </a>
                    <span className="project-type">Customer Churn Analysis</span>
                    <div className="certificate-link">
                        <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_mrDqPxd5vMfi6t89y_1753450397248_completion_certificate.pdf" target="_blank" rel="noreferrer">
                            📄 View Certificate
                        </a>
                    </div>
                </div>
                <div className="project-content">
                    <div className="project-description">
                        <h3>Overview</h3>
                        <p>Completed a comprehensive customer churn analysis simulation for XYZ Analytics, demonstrating advanced data analytics skills and strategic problem-solving capabilities.</p>
                        
                        <h3>Key Achievements</h3>
                        <ul>
                            <li>Conducted efficient data analysis using Python (Pandas, NumPy)</li>
                            <li>Employed advanced data visualization techniques for trend interpretation</li>
                            <li>Engineered and optimized a Random Forest model achieving 50% recall rate</li>
                            <li>Delivered actionable insights through executive summary</li>
                        </ul>
                        
                        <h3>Technical Skills Demonstrated</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Pandas</span>
                            <span className="skill-tag">NumPy</span>
                            <span className="skill-tag">Machine Learning</span>
                            <span className="skill-tag">Data Visualization</span>
                            <span className="skill-tag">Random Forest</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;


