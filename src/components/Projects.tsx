import { useState } from "react";
import Modal from "./Modal";

interface ProjectProps {
  title: string;
  date: string;
  summary: string;
  details: string[];
  url: string;
  stack: string;
  modalId: string;
}

const Projects = ({
  title,
  date,
  summary,
  details,
  url,
  stack,
  modalId,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-title">{title}</div>
          <div className="title-detail">{date}</div>
          <div className="project_summary">
            <div className="title">{summary}</div>
            <ul className="detail">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="url">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </div>
            <div className="taskbox">{stack}</div>
          </div>
          <div className="cardbtnzone">
            <button className="card-btn" onClick={() => setIsModalOpen(true)}>
              <span className="button_top">자세히</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={title}
          details={details}
          url={url}
          stack={stack}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Projects;
