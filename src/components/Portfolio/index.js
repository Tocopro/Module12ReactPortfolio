import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Rock Paper Scissors',
			description:
				'The first projects to get the bootcamp student have an understanding on how' +
				'different technologies i.e. html and css can be used to create a game',
			image: 'rockpaperscissorspng.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',				
			],
			github: 'https://github.com/Tocopro/rock_paper_scissors_game/tree/main',
			
		},
		{
			name: 'Calendar Application',
			description:
				'This is a project to create a planner that had consistent memory wherby the users' +
				'could save entries and view past or future entries',
			image: 'CalendarApplication.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				
			],
			github: 'https://github.com/Tocopro/Calendar_Application',

		},
		{
			name: 'Weather App',
			description:
				'This is an app that was created using weather API to predict accurately' +
				'the forecast whilst showing the user gifs of the weather expected and in what day',
			image: 'WeatherApp.png',
			technologies: ['HTML/CSS', 'JavaScript'],

			github: 'https://github.com/Tocopro/Weather_App_Project',
		},		
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/OwaisIslam/weather-dashboard',
			deployed: 'https://owaisislam.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Node'],
			github: 'https://github.com/Tocopro/password-generation',
			deployed: 'https://tocopro.github.io/password-generation/',
		},
		{
			name: 'tech blog',
			description:
				'This application allows the user participate with other'
				+ 'developers posing and reading articles posted by developers using databases'
				 + 'to store blogs posted',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/Tocopro/techBlog',
			deployed: 'node server.js',
		},
		{
			name: 'Movie Review',
			description:
				'As a group project we were to develop a movie reviiew app and deploy it in heroku',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/Tocopro/MovieReview_Project15',
			deployed: 'https://movieReviewApp.herokuapp.com/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
