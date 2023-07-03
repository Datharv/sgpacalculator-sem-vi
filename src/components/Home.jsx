import React, { useState } from "react";
import Subject from "./Subject";
import { subjects } from "./subjects";



const Alert = ({ message }) => {
  const alertStyle = {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return (
    <div style={alertStyle}>
      {message}
    </div>
  );
};


const Home = () => {
  const [selectedGrades, setSelectedGrades] = useState({});
  const [alert, showAlert] = useState(false);
  const [sgpa, setSGPA] = useState(null);

  const handleGradeChange = (coursecode, grade) => {
    setSelectedGrades((prevGrades) => ({
      ...prevGrades,
      [coursecode]: grade,
    }));
  };

 
  const handleCalculate = () => { 
    
const allGradesSelected = subjects.every((subject) =>
  selectedGrades.hasOwnProperty(subject.coursecode)
);





    console.log(allGradesSelected);
    
    if (allGradesSelected) {
      const totalCredits = subjects.reduce(
        (sum, subject) => sum + subject.credits,
        0
      );
      console.log(selectedGrades);
      
      const totalWeightedGrade = subjects.reduce(
        (sum, subject) =>
          sum + parseInt(selectedGrades[subject.coursecode]) * subject.credits,
        0
      );
      console.log(totalCredits);
      
      const calculatedSGPA = totalWeightedGrade / totalCredits;
      setSGPA(calculatedSGPA);
      console.log(calculatedSGPA);
    } else {
      setSGPA(null); 
      showAlert(true);
    }
    
  };

  

  return (
    <div className="container">
      <div className="subheading">
        <div className="coursecode">COURSECODE</div>
        <div className="name">NAME</div>
        <div className="credits">CREDITS</div>
        <div className="credits">GRADES</div>
      </div>
      {subjects.map((subject, index) => (
        <Subject
          key={index}
          coursecode={subject.coursecode}
          name={subject.name}
          credits={subject.credits}
          handleGradeChange={handleGradeChange}
        />
      ))}
      <button onClick={handleCalculate}>CALCULATE</button>

      {alert && sgpa === null && (
        <Alert message="Please select grades for all subjects." />
      )}
      {sgpa !== null && <div className="gpa">SGPA: {sgpa.toFixed(2)}</div>}
    </div>
  );
};

export default Home;
