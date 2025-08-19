import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faGears, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analysis & Visualization</h3>
                    <p>I specialize in turning complex data into actionable insights through comprehensive data analysis, cleaning, and visualization. I build interactive dashboards and detailed reports that support data-driven decision making across operational, strategic, and executive levels.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Key Tools:</span>
                        <Chip className='chip' label="Power BI" />
                        <Chip className='chip' label="PostgreSQL" />
                        <Chip className='chip' label="Excel (Advanced)" />
                        <Chip className='chip' label="Power Query" />
                        <Chip className='chip' label="Python" />
                        <Chip className='chip' label="SQL" />
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>Business Intelligence & Automation</h3>
                    <p>I design and implement scalable BI solutions that automate data preparation, streamline reporting processes, and deliver clear insights. I leverage Power Query, advanced Excel modeling, and SQL ETL pipelines to efficiently handle complex, multi-source datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Areas:</span>
                        <Chip className='chip' label="Data Automation" />
                        <Chip className='chip' label="ETL Pipelines" />
                        <Chip className='chip' label="KPI Dashboards" />
                        <Chip className='chip' label="Performance Monitoring" />
                        <Chip className='chip' label="Power Query M" />
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Applied Data Science & Modeling</h3>
                    <p>With a strong foundation in Applied Mathematics and Physics, I apply statistical modeling, forecasting, optimization, and quantitative methods to solve real-world business problems. My work combines analytical rigor with a strong understanding of business processes and operational dynamics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Key Skills:</span>
                        <Chip className='chip' label="Predictive Modeling" />
                        <Chip className='chip' label="Optimization" />
                        <Chip className='chip' label="Statistical Analysis" />
                        <Chip className='chip' label="Applied Mathematics" />
                        <Chip className='chip' label="Risk Analysis" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
