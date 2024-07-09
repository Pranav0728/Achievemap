"use client"
import React, { useState } from "react";

interface CareerOption {
  value: string;
  label: string;
}

const CareerDropdown: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string>("");

  const careers: CareerOption[] = [
    { value: "web-developer", label: "Web Developer" },
    { value: "ai-engineer", label: "AI Engineer" },
    { value: "software-engineer", label: "Software Engineer" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "network-engineer", label: "Network Engineer" },
    { value: "cyber-security-analyst", label: "Cyber Security Analyst" },
    { value: "cloud-solutions-architect", label: "Cloud Solutions Architect" },
    { value: "blockchain-developer", label: "Blockchain Developer" },
    { value: "game-developer", label: "Game Developer" },
    { value: "mobile-app-developer", label: "Mobile App Developer" },
    { value: "frontend-developer", label: "Frontend Developer" },
    { value: "backend-developer", label: "Backend Developer" },
    { value: "full-stack-developer", label: "Full Stack Developer" },
    { value: "ui-ux-designer", label: "UI/UX Designer" },
    { value: "devops-engineer", label: "DevOps Engineer" },
    { value: "machine-learning-engineer", label: "Machine Learning Engineer" },
    { value: "computer-vision-engineer", label: "Computer Vision Engineer" },
    { value: "robotics-engineer", label: "Robotics Engineer" },
    { value: "data-engineer", label: "Data Engineer" },
    { value: "business-analyst", label: "Business Analyst" },
    { value: "systems-analyst", label: "Systems Analyst" },
    { value: "it-consultant", label: "IT Consultant" },
    // Add more career options as needed
  ];

  const handleCareerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCareer(event.target.value);
  };

  return (
    <div>
      <label htmlFor="career">Select the career you want to pursue</label>
      <select
        id="career"
        value={selectedCareer}
        onChange={handleCareerChange}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-black"
      >
        <option value="">Select...</option>
        {careers.map((career) => (
          <option key={career.value} value={career.value}>
            {career.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CareerDropdown;
