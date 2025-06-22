import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

// You don't need FontAwesome anymore unless you want to use it elsewhere

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - present"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src="https://www.gov.za/themes/custom/tailwindcss/images/rsa-coat-of-arms.svg"
                alt="State Security Agency"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10%' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Business Intelligence Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">State Security Agency (Contractor)</h4>
            <h6 className="vertical-timeline-element-subtitle">Pretoria, Gauteng</h6>
            <p>
              Processed intelligence data using Postgres SQL from multiple formats into datasets for Superset, Power BI, and Excel to deliver OSINT reports and risk forecasts for state security clients.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src="https://topicworx.co.za/static/media/demo_icon.png"
                alt="Topicworx"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10%' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Junior Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Topicworx Pty Ltd</h4>
            <h6 className="vertical-timeline-element-subtitle">Pretoria, Gauteng</h6>
            <p>
              Built Power BI dashboards using Power Query to analyze global operational and maritime risks, visualizing incidents with Google Maps and delivering intelligence reports to help clients mitigate threats.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Jul 2024"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src="https://blackbeariot.co.za/wp-content/uploads/2022/08/BB-White-100px.png"
                alt="Blackbear Solutions"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10%' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Blackbear Solutions</h4>
            <h6 className="vertical-timeline-element-subtitle">Johannesburg, Gauteng</h6>
            <p>
              Built interactive Qlik dashboards for maintenance and asset management of student accommodation and real estate portfolios as a contractor for BlackBear Solutions Pty Ltd.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
