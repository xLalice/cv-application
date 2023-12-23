export default function Skills(props){
    return (
        <form className="padding">
            <h1>Certifications, Skills & Interests</h1>
            <label>Certifications
                <input name="certifications" value={props.data.certifications} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Skills
                <input name="skillSet" value={props.data.skillSet} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Interests
                <input name="interests" value={props.data.interests} onChange={(e) => props.onChange(e)}/>
            </label>
        </form>
    )
}