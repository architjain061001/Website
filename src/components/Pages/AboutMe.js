import React, { useState } from "react";
import "./AboutMe.css"
import Copyright from '../Copyright'
import dp from '../../Images/aboutImg.png'
import testmnl1 from '../../Images/test-1.jpeg'
import tstmnl2 from '../../Images/test-2.png'

function AboutMe() {
	// Define the initial state for the social links
	const [socialLinks] = useState([
		{
			platform: "GitHub",
			url: "https://github.com/architjain061001/",
			iconClass: "fa-brands fa-github"
		},
		{
			platform: "LinkedIn",
			url: "https://www.linkedin.com/in/archit-jain-8135821aa/",
			iconClass: "fa-brands fa-linkedin"
		},
		{
			platform: "Instagram",
			url: "https://www.instagram.com/architrjain",
			iconClass: "fa-brands fa-instagram"
		}
	]);

	// Define the initial state for the services section
	const [servicesInfo] = useState([
		{
			title: "Programming",
			desc: "With months of software experience and pursuing it as a major, I could help you code various forms of projects in 8 different programming languages",
			icon: "fa-solid fa-terminal"
		},
		{
			title: "App Development",
			desc: "With months of experience in mobile app development and a passion for creating innovative applications, I can assist you in building feature-rich mobile apps for a variety of platforms and use cases.",
			icon: "fa-brands fa-app-store"
		},
		{
			title: "Web Design",
			desc: "You have a stunning personality? So, why not portray it through your website? With my skill in graphic design and personal projects, I could help you sketch a website for all your services",
			icon: "fa-brands fa-css3-alt"
		},
		{
			title: "Digital Marketing",
			desc: "With experience in three marketing internships, I could help you find the secret sauce to achieve your target audience goals",
			icon: "fa-solid fa-share-nodes"
		},
		{
			title: "Graphic Design",
			desc: "Need graphics to market your business? I could help construct some stunning designs for your services",
			icon: "fa-solid fa-wand-magic-sparkles"
		},
		{
			title: "Audio-Video Composition",
			desc: "Want to give your users an experience before they try your product? I can help compose videos that will explain your idea within minutes to your user",
			icon: "fa-solid fa-clapperboard"
		}
	]);

	// Define the initial state for the testimonials section
	const [testimonialsInfo] = useState([
		{
			name: "Abhay Valsangkar",
			role: "Director, Alter Ego Learning",
			image: testmnl1,
			description: "We found him as a pleasant and charming personality. He was honest, hardworking, and carried out his duties much to our satisfaction. We believe him to be an excellent and flexible choice for anyone. His Association with our company was very fruitful and we wish him good luck for all future endeavors and would like to recommend him to any prospective Employer."
		},
		{
			name: "Vividh Raurale",
			role: "Manager, Rossari Biotech Ltd.",
			image: tstmnl2,
			description: "He is hardworking and has worked diligently. He was able to understand the requirements of his job roles and responsibilities. He mingles well with the people around and completes the work on a timely basis."
		}
	]);

	return (
		<>
			{/* About Me Section */}
			<div className="about-page">
				<div className="about-left-section">
					
					{/* Information Section */}
					<h2 className="intro">Hello, I'm</h2>
					<h1 className="name">Archit Jain</h1>
					<div className="role-wrapper">
						<h1 className="role-text">I'm</h1>
						<ul className='roles'>
							<li><span>a Freelancer</span></li>
							<li><span>a Software Developer</span></li>
							<li><span>a Designer</span></li>
							<li><span>an Author</span></li>
						</ul>
					</div>

					{/* Social Links Section */}
					<div class="about-social-container">
						{socialLinks.map((link, index) => (
							<a className='social-object' href={link.url} target="_blank" rel="noreferrer" key={index}>
								<i className={link.iconClass}></i>
							</a>
						))}
					</div>
				</div>
				
				{/* Picture */}
				<div className="about-right-section">
					<img src={dp} alt="" className="about-img" />
				</div>
			</div>
			
			{/* Services Section */}
			<div className='service-page'>
				<h1 className='service-page-subtitle'>Services I can offer</h1>
				<h1 className='service-page-title'>My Services</h1>
				<div className='services'>
					{servicesInfo.map((service, index) => (
						<div className='service-sec' key={index}>
							<i className={service.icon}></i>
							<h1 className='service-title'>{service.title}</h1>
							<p className='service-desc'>{service.desc}</p>
						</div>
					))}
				</div>
			</div>

			{/* Testimonial Section */}
			<div className='testimonials'>
				<h2 className='test-sub-title'> What my employers think </h2>
				<h1 className='test-title'> Testimonials </h1>
				<div className='testimonials-section'>
					{testimonialsInfo.map((testimonial, index) => (
						<div className='testimonial-block' key={index}>
							<div className='name-role-img'>
								<div className='test-img-sec'>
									<img src={testimonial.image} alt="" className="test-img" />
								</div>
								<div className='name-role'>
									<h3 className='test-name'>{testimonial.name}</h3>
									<h3 className='test-role'>{testimonial.role}</h3>
								</div>
							</div>
							<p className='test-desc'>{testimonial.description}</p>
						</div>
					))}
				</div>
			</div>

			<Copyright />
		</>
	);
};

export default AboutMe;