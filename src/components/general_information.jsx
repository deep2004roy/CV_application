import { useState } from "react";

function GeneralInformation() {
  const [isEditing, setIsEditing] = useState(true);
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    setGeneral({ ...general, [e.target.name]: e.target.value }); // Fixed typo here
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
              Name: {""}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={general.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div>
            <lable>
              Email: {""}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={general.email}
                onChange={handleChange}
              />
            </lable>
          </div>
          <br />
          <div>
            <lable>
              Phone number: {""}
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={general.phoneNumber}
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
            <strong>Name:</strong> {general.name}
          </p>
          <p>
            <strong>Email:</strong> {general.email}
          </p>
          <p>
            <strong>Phone number:</strong> {general.phoneNumber}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInformation;
