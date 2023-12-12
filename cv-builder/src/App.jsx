import { useState } from 'react'
import Form from './components/Form';
import Resume from "./components/Resume";
import './App.css'

function App() {
	const [contacts, setContacts] = useState({
		name: "Jobby McJobface",
		email: "help@sheetsresume.com",
		number: "(555) 555-5555",
		city: "Denver, CO",
		portfolio: undefined
	});
	const [work, setWork] = useState([{
		company: "Sheets & Giggle",
		jobTitle: "CEO",
		tenure: "Oct 2017 - Present",
		city: "Denver, CO",
		responsibilities: ["S&G makes sustainable plant-based mattresses, sheets, & pillows from Eucalyptus Lyocell (SheetsGiggles.com).", "LOLS"]
	}]);

	const [education, setEducation] = useState({
		university: "Harvard",
		degree: "BS Computer Science",
		graduation: "2017-2021",
		city: "Denver, CO",
		honors: ["Summa Cum Laude"],
		stuff: ["Varsity"]
	});

	const [skills, setSkills] = useState({
		certifications: ["TOP"],
		skillSet: ["Front End, Backend"],
		interests: ["comedy"]
	});

	function contactsHandler(e) {
		const { name, value } = e.target;
		setContacts((prevState) => ({
			...prevState,
			[name]: value,
		}));
	} 

	function workHandler(e){
		const { name, value } = e.target;
		setWork((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function educationHandler(e) {
		const {name, value } = e.target;
		setEducation((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	function skillsHandler(e) {
		const { name, value } = e.target;
		setSkills((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	function addWork(){
		setWork(prevState => [...prevState, {}])
	}
	

	return (
		<div class="content">
			<Form 
				setContacts={contactsHandler}
				contacts={contacts}
				work={work}
				setWork={workHandler}
				education={education}
				setEducation={educationHandler}
				skills={skills}
				setSkills={skillsHandler}/>
			<Resume 
				contacts={contacts}
				work={work}
				education={education}
				skills={skills}/>
		</div>
	)

}

export default App
