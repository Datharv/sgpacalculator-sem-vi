import React from "react";

const Subject = ({ coursecode, name, credits, handleGradeChange }) => {
  const handleSelectChange = (event) => {
    const grade = event.target.value;
    handleGradeChange(coursecode, grade);
  };

  return (
    <div className="subject">
      <div className="coursecode">{coursecode}</div>
      <div className="name">{name}</div>
      <div className="credits">{credits}</div>

      <select name="sub" onChange={handleSelectChange}>
        <option value="">Select</option>
        <option value="10">A++</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C+</option>
        <option value="4">C</option>
      </select>
    </div>
  );
};

export default Subject;
