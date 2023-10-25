import React, { useState } from "react";
import './Profile.css'
import Copyright from '../Copyright'
import profileImg from '../../Images/Profile.JPG'


export default function Profile() {
    // Define the initial state for personal attributes
    const [personalAttributes] = useState([
        {
            icon: "fa-solid fa-laptop-code",
            time: "10+",
            name: "Months of SWE Experience",
        },
        {
            icon: "fa-solid fa-square-poll-vertical",
            time: "2+",
            name: "Years of Marketing Experience",
        },
        {
            icon: "fa-solid fa-code",
            time: "8",
            name: "Programming Languages",
        },
        {
            icon: "fa-solid fa-book",
            time: "3",
            name: "Published Anthologies",
        },
    ]);

    // Define the initial state for Education
    const [educationInfo] = useState([
        {
            schoolName: "Tufts University",
            time: "2020-2023",
            degree: "B.S in Computer Science / Major GPA: 3.81",
            honors: "Honors: Cum Laude",
            deanList: "Dean's List: Fall '20, Spring '21, Fall '21, Spring '22",
            description:
                "Activities and societies: JumboCode (Coding Projects for Non-profits), Tufts Association for South Asians (Cultural organisation), Tamasha (Bollywood Fusion-Dance group)",
            relevantCourses:
                "Relevant Courses: Machine Structures and Assembly-language Programming, Programming Languages, Algorithms, Machine Learning, Intro to Software and Developer Tooling, Data Structures, Computation Theory, Linear Algebra, Discrete Mathematics, Entrepreneurship: Business Planning, Marketing, Finance",
        },
        {
            schoolName: "Emory University",
            time: "2019-2020",
            degree: "Cumulative GPA: 3.85",
            description:
                "Activities and societies: Sigma Beta Rho (Fraternity), Project Shine of Emory University (Volunteer Organization), Volunteer Emory (Volunteer Organization)",
            relevantCourses: "Relevant Courses: Intermediate Microeconomics, Calculus 2, Financial Accounting",
        },
        {
            schoolName: "D.Y. Patil International School",
            time: "2009-2019",
            degree: "IB Diploma Programme, Cambridge IGCSE, Cambridge Checkpoint",
            description:
                "Activities and societies: DYMUN (Co-chair of the press), Inter-house Dramatics Competition (Supporting Actor and Audio-Visual Director), Infinity (Represented my school in the nationwide math competition)",
            relevantCourses: "Relevant Courses: Math HL, Computer Science HL, Economics HL",
        },
    ]);

    // Define the initial state for Leadership
    const [Leadership] = useState([
        {
            companyName: "Tufts Association of South Asians",
            time: "Sep 2020 - May 2023",
            role: "Head of Public Relations",
            description:
                "Led an event planning team by creating graphics, video compositions, and social media outreach across campus for all students and organizations south-asian community.",
        },
        {
            companyName: "Tufts Cricket Club",
            time: "Sep 2022 - May 2023",
            role: "Vice Captain",
            description:
                "Vice Captain of the University cricket team where I planned and strategized gameplay, managed the team, led squad selection, and planned strategies for games against other universities.",
        },
    ]);

    // Define the initial state for work experience
    const [workExperience] = useState([
        {
            companyName: "Tufts Department of Computer Science",
            time: "Jun 2022 - Aug 2022",
            role: "Teaching Assistant",
            description:
                "I had the privilege of assisting in teaching a challenging computer science class with a class size of 100 students at Tufts, where I also took on the responsibility of grading coding and conceptual assignments for the computer science department.",
        },
        {
            companyName: "Vidmob Inc.",
            time: "Jun 2022 - Aug 2022",
            role: "Software Engineering Intern",
            description:
                "Software Engineer at Vidmob where I worked with a team to help innovate, improve, and maintain their flagship product 'Agile Creative Studio' through full stack development using essential tools such as Redux, Javascript, CSS, SQL, and AWS.",
        },
        {
            companyName: "Tufts College Community Research Center",
            time: "Sep 2021 - Dec 2021",
            role: "Student Consultant",
            description:
                "Worked and coordinated with a team of 5 students to implement a marketing campaign and a comprehensive marketing plan for an organization that focuses on providing grants and opportunities for community-based participatory research to Tufts students.",
        },
        {
            companyName: "Tufts JumboCode",
            time: "Sep 2021 - May 2022",
            role: "Student Developer",
            description:
                "Student developer at JumboCode, a volunteer organization, where I worked with a team of 10 students to develop a website for a non-profit organization – Bergen Family Center – to help organize their events.",
        },
        {
            companyName: "Rossari Biotech Ltd.",
            time: "Jun 2021 - Jul 2021",
            role: "Marketing Intern",
            description:
                "Marketing Intern at a Biotech organization where I conducted surveys, directed market research, analyzed product performance, and devised reports about the company's brand image, performance, and customer feedback.",
        },
        {
            companyName: "SquarExchange",
            time: "Jun 2020 - Aug 2020",
            role: "Marketing Director",
            description:
                "Delegated and coordinated tasks with the marketing team, Devised marketing strategies, designed logos and graphics, Produced marketing videos, and edited online lessons to help establish an EdTech Startup.",
        },
    ]);

    // Define the initial state for skills
    const [skills] = useState([
        "C++",
        "C",
        "Java",
        "Python",
        "Swift",
        "Javascript",
        "CSS",
        "HTML",
        "React",
        "Photoshop",
        "FCPX",
        "MS Office",
    ]);

    return (
        <div className='profile-page'>
            <div className='personal-attribute'>
                <h1 className='profile-header'>Profile</h1>
                <div className='personal-attribute-col'>
                    <div className='personal-column'>
                        <img src={profileImg} alt="" className='personal-img' />
                    </div>
                    <div className='attribute-column'>
                        {personalAttributes.map((attribute, index) => (
                            <div className="attribute" key={index}>
                                <i className={attribute.icon} />
                                <h1 className="attribute-time">{attribute.time}</h1>
                                <h3 className="attribute-name">{attribute.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='edu-exp-column'>
                <div className='edu-column'>
                    <h1 className='edu-exp-title'>Education & Leadership</h1>

                    {educationInfo.map((edu, index) => (
                        <div className="school" key={index}>
                            <div className="school-icon-name">
                                <div className="school-icon-cover">
                                    <i className="fa-solid fa-user-graduate" />
                                </div>
                                <h2 className="school-name">{edu.schoolName}</h2>
                            </div>
                            <div className="school-info">
                                <div className="school-time-border">
                                    <p className="school-time">{edu.time}</p>
                                </div>
                                <h3 className="school-degree">{edu.degree}</h3>
                                <h3 className="school-degree">{edu.honors}</h3>
                                <h3 className="school-degree">{edu.deanList}</h3>
                                <p className="school-desc">{edu.description}</p>
                                <p className="school-desc">{edu.relevantCourses}</p>
                            </div>
                        </div>
                    ))}

                    {Leadership.map((experience, index) => (
                        <div className="school" key={index}>
                            <div className="school-icon-name">
                                <div className="school-icon-cover">
                                    <i className="fa-solid fa-crown" />
                                </div>
                                <h2 className="company-name">{experience.companyName}</h2>
                            </div>
                            <div className="school-info">
                                <div className="school-time-border">
                                    <p className="school-time">{experience.time}</p>
                                </div>
                                <h3 className="company-role">{experience.role}</h3>
                                <p className="company-desc">{experience.description}</p>
                            </div>
                        </div>
                    ))}

                    <div className='school'>
                        <div className='school-icon-name'>
                            <div className='school-icon-cover'>
                                <i class="fa-solid fa-certificate" />
                            </div>
                            <h2 className='school-name'>Certifications</h2>
                        </div>
                        <div className='school-info'>
                            <div className='school-time-border'>
                                <p className='school-time'>Until Present</p>
                            </div>
                            <p className='school-desc'>
                                Certificate of Excellence as the 'strategist'
                                in the Digital Marketing Internship at Alter
                                Ego Learning, 2020
                            </p>
                            <p className='school-desc'>
                                Learn Swift by CodeAcademy
                            </p>
                        </div>
                    </div>
                </div>

                <div className='exp-column'>
                    <h1 className='edu-exp-title'>Experience</h1>
                    {workExperience.map((experience, index) => (
                        <div className="company" key={index}>
                            <div className="company-icon-name">
                                <div className="company-icon-cover">
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <h2 className="company-name">{experience.companyName}</h2>
                            </div>
                            <div className="company-info">
                                <div className="company-time-border">
                                    <p className="company-time">{experience.time}</p>
                                </div>
                                <h3 className="company-role">{experience.role}</h3>
                                <p className="company-desc">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className='skills-title'>Skills</h1>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <div className="skill-sec" key={index}>
                        <h3 className="skill-name">{skill}</h3>
                    </div>
                ))}
            </div>
            <Copyright />
        </div>
    )
}