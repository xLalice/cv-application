import "./Resume.scss";

export default function Resume(props){

    const jobs = props.work.map((item, index) => {
        return (
            <div key={index} className="job">
                <div className="row">
                    <h2 className="bold">{item.company}</h2>
                    <h2 className="bold">{item.tenure}</h2>
                </div>
                <div className="row">
                    <h2 className="italics">{item.jobTitle}</h2>
                    <h2 className="italics">{item.city}</h2>
                </div>
                {item.responsibilities.map((res, index) => {
                    return (<li key={index}>{res}</li>)
                })}
            </div>
        )
    })

    return (
        <div className="resume">
            <div className="header">
                <h1>{props.contacts.name}</h1>
                <p>{props.contacts.email}◈</p>
                <p>{props.contacts.number}◈</p>
                <p>{props.contacts.city}</p>
                {(props.contacts.portfolio !== "") && <p>◈{props.contacts.portfolio}</p>}
            </div>
            <div className="divider"></div>
            <div className="experience">
                <h1>WORK EXPERIENCE</h1>
                <div className="divider"></div>
                <div className="job">
                    {jobs}
                </div>
            </div>
            <div className="education">
                <h1>EDUCATION</h1>
                <div className="divider"></div>
                <div className="row">
                    <h2 className="bold">{props.education.university}</h2>
                    <h2 className="bold">{props.education.graduation}</h2>
                </div>
                <div className="row">
                    <h2 className="italics">{props.education.degree}</h2>
                    <h2 className="italics">{props.education.city}</h2>
                </div>
                <li>{props.education.honors.join(', ')}</li>
                <li>{props.education.stuff.join(', ')}</li>
            </div>
            <div className="skills">
                <h1>CERTIFICATES, SKILLS, INTERESTS</h1>
                <div className="divider"></div>
                <p><span className="bold">Certifications:</span> {props.skills.certifications.join(", ")}</p>
                <p><span className="bold">Skills:</span> {props.skills.skillSet.join(", ")}</p>
                <p><span className="bold">Interests:</span> {props.skills.interests.join(", ")}</p>
            </div>
            
        </div>
    )

}