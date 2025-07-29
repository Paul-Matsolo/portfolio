import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Job Simulations</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src="https://www.theforage.com/_next/image?url=https%3A%2F%2Fcdn.theforage.com%2Fvinternships%2Fcompanyassets%2FSKZxezskWgmFjRvj9%2FBqF6gmrmLunCkdqKM%2F1691493825727%2F01-bcgx-logo-color-positive-RGB-small.png&w=1920&q=75"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>BCG: Data Science</h2></a>
                <p> Completed a customer churn analysis simulation for XYZ Analytics, demonstrating advanced data analytics skills, identifying essential client data and outlining a strategic investigation approach.
                    Conducted efficient data analysis using Python, including Pandas and NumPy.Employed data visualization techniques for insightful trend interpretation. Completed the engineering and optimization of a random forest model, achieving an 50% recall rate in predicting customer churn.
 Completed a concise executive summary for the team, delivering actionable
 insights for informed decision-making based on the analysis.
                
                </p>
            </div>
    </div>
        </div>
    );
}

export default Project;
