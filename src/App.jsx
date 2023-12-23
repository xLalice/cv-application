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
		portfolio: ""
	});
	const [work, setWork] = useState([{
		company: "Sheets & Giggle",
		jobTitle: "CEO",
		tenure: "Oct 2017 - Present",
		city: "Denver, CO",
		responsibilities: ["S&G makes sustainable plant-based mattresses, sheets, & pillows from Eucalyptus Lyocell (SheetsGiggles.com).", "Hundreds of thousands of units sold in first 5 years of operation with a 4.8 star average rating."]
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

	function workHandler(name, value, key){
		const nextCounters = work.map((item, index) => {
			if (key === index) {
				return {
					...item,
					[name]: value,
				}
			} else {
				return item;
			}
		});
		setWork(nextCounters);
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
		setWork(prevState => [...prevState, {
			company: "Sheets & Giggle",
			jobTitle: "CEO",
			tenure: "Oct 2017 - Present",
			city: "Denver, CO",
			responsibilities: ["S&G makes sustainable plant-based mattresses, sheets, & pillows from Eucalyptus Lyocell (SheetsGiggles.com).", "LOLS"]
		}])
	}

	function addResponsibility(index, newRes) {
		console.log("Index:", index);
		console.log("prev[index]:", prev[index]);
		const prev = [...work];
		prev[index].responsibilities.push(newRes);
		setWork(prev);
		console.log(work);
	}

	function handleResponsibilities(workIndex, resIndex, newValue){
		const updatedWork = [...work];
		updatedWork[workIndex].responsibilities[resIndex] = newValue;
		setWork(updatedWork);
	}

	

	return (
		<div className="content">
			<Form 
				setContacts={contactsHandler}
				contacts={contacts}
				work={work}
				setWork={workHandler}
				education={education}
				setEducation={educationHandler}
				skills={skills}
				setSkills={skillsHandler}
				addWork={addWork}
				addResponsibility={addResponsibility}
				handleResponsibilities={handleResponsibilities}
			/>
				
			<Resume 
				contacts={contacts}
				work={work}
				education={education}
				skills={skills}
			/>
		</div>
	)

}

export default App
