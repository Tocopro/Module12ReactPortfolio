import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">ABOUT ME</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer studet at a bootcamo in UofM, looking to build  more
					intuitive webs the user can interact with. In the bootccamp 
					technologies such as JavaScript, CSS, React.js, and responsive web
					design were instructed with individual project as well as group projects.
					 I like to innovative and solve problems which is a 
					passionate aI have to develop websites that are intuituve and interactive.
					with a focus on	mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
				<p>
					I applied aspects of MongoDB and node.js, express.js,MY SQL Database, in a
					recent assignment. {' '}
					<a
						href="https://github.com/Tocopro/NOSQLSocialNetworkAPI"
						target="_blank"
					>
					</a>{' '}
					a{' '}
					<a
						href="https://github.com/Tocopro/modeule12employeetracker"
						target="_blank"
					>
						
					</a>{' '}
					that help users to get into contact with other users and an employee tracker that 
					will allow employers to operate in  a fast-paced enviroment with help from technologies
				</p>
			</div>
		</section>
	);
}

export default About;
