

function Student(props)
{
    return(
         
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student

{/* <Student name= "Gowtham" age = {19} isStudent = {true} />
     <Student name= "Ajay" age = {19} isStudent = {false} /> */}