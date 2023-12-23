export default function Education(props){
    return (
        <form className="padding">
            <h1>Education</h1>
            <label>University Name
                <input name="university" value={props.data.university} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Degree
                <input name="degree" value={props.data.degree} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Graduation Month, Year
                <input name="graduation" value={props.data.graduation} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>City, ST
                <input name="city" value={props.data.city} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Honors
                <input name="honors" value={props.data.honors} onChange={(e) => props.onChange(e)}/>
            </label>
            <label>Fun Stuff You Did at School
                <input name="stuff" value={props.data.stuff} onChange={(e) => props.onChange(e)}/>
            </label>
        </form>
    )
}