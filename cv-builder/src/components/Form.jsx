import Contacts from "./Contacts";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import "./Form.scss";

export default function Form(props){
    return (
        <div className="forms">
            <Contacts data={props.contacts} onChange={props.setContacts}/>
            <Work data={props.work} 
                onChange={props.setWork} 
                addWork={props.addWork} 
                addResponsibility={props.addResponsibility}
                handleResponsibilities={props.handleResponsibilities}/>
            <Education data={props.education} onChange={props.setEducation}/>
            <Skills data={props.skills} onChange={props.setSkills}/>
        </div>
    )
}