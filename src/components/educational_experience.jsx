import { useState } from "react";

function EducationalExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setIsEditing(false); // Switch to view mode
  }

  function handleEdit() {
    setIsEditing(true); // Switch back to edit mode
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <div>
            <label>
              School: {""}
              <input
                type="text"
                name="school"
                placeholder="School Name"
                value={education.school}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Title of study: {""}
              <input
                type="text"
                name="title"
                placeholder="Title of Study"
                value={education.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <lable>
              Date: {""}
              <input
                type="date"
                name="date"
                value={education.date}
                onChange={handleChange}
              />
            </lable>
          </div>
          <br />
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <br />
        </div>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {education.school}
          </p>
          <p>
            <strong>Title of Study:</strong> {education.title}
          </p>
          <p>
            <strong>Date:</strong> {education.date}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationalExperience;
