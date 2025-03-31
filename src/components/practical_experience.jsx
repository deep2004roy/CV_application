import { useState } from "react";
export default function PracticalExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [practical, setPractical] = useState({
    companyName: "",
    positionTitle: "",
    responsibility: "",
    joiningDate: "",
    leavingDate: "",
  });

  function handleChange(e) {
    setPractical({ ...practical, [e.target.name]: e.target.value });
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
              Company name: {""}
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={practical.companyName}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Position title: {""}
              <input
                type="text"
                name="positionTitle"
                placeholder="Position title"
                value={practical.positionTitle}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Responsibility: {""}
              <input
                type="text"
                name="responsibility"
                placeholder="Responsibility"
                value={practical.responsibility}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Joining date: {""}
              <input
                type="date"
                name="joiningDate"
                value={practical.joiningDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Leaving date: {""}
              <input
                type="date"
                name="leavingDate"
                value={practical.leavingDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <div>
          <p>
            <strong>Company name:</strong> {practical.companyName}
          </p>
          <p>
            <strong>Position title:</strong> {practical.positionTitle}
          </p>
          <p>
            <strong>Responsibility:</strong> {practical.responsibility}
          </p>
          <p>
            <strong>Joining date:</strong> {practical.joiningDate}
          </p>
          <p>
            <strong>Leaving date:</strong> {practical.leavingDate}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
