export default function Work(props){
    const workForms = props.data.map((item, index) => {
        return(
            <form key={index} className="padding">  
                <h1>Work Experience {index+1}</h1>
                <label>Company Name
                    <input name="company" value={item.company} onChange={(e) => props.onChange(e.target.name, e.target.value, index)}/>
                </label>
                <label>Job Title
                    <input name="jobTitle" value={item.jobTitle} onChange={(e) => props.onChange(e.target.name, e.target.value, index)}/>
                </label>
                <label>Month, Year - Month, Year
                    <input name="tenure" value={item.tenure} onChange={(e) => props.onChange(e.target.name, e.target.value, index)}/>
                </label>
                <label>City, ST
                    <input name="city" value={item.city} onChange={(e) => props.onChange(e.target.name, e.target.value, index)}/>
                </label>
                <label>
                    Core Responsibilities<br></br>
                    {item.responsibilities.map((res, resIndex) => ( 
                    <>
                    <input
                        key={resIndex}
                        name="responsibility"
                        value={res}
                        onChange={(e) => props.handleResponsibilities(index, resIndex, e.target.value)}
                    />
                    <br></br>
                    </>   
                ))}
                </label>
                <button type="button" onClick={() => props.addWork()}>+</button>
            </form>
        )
    })

    return (
        <>
            {workForms}
        </>
    )
}