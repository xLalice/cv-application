import {useState} from "react";
import Contacts from "./Contacts";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";

export default function Form(props){
    return (
        <>
            <Contacts data={props.contacts} onChange={props.setContacts}/>
            <Work data={props.work} onChange={props.setWork}/>
            <Education data={props.education} onChange={props.setEducation}/>
            <Skills data={props.skills} onChange={props.setSkills}/>
        </>
    )
}