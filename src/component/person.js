import axios from "axios";
import React, { useState } from "react";

const Person = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://express-server-3000.herokuapp.com/person", {
        person: {
          name: name,
          age: age,
          gender: gender,
        },
      })
      .then((res) => {
        setNewAge(res.data.age);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label data-testid="name">Name</label>
        <input
          type="text"
          data-testid="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label data-testid="age">Age</label>
        <input
          type="text"
          data-testid="age-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label data-testid="gender">Gender: </label>
        <input
          type="text"
          data-testid="gender-input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button data-testid="form-submit" type="submit">
          Submit
        </button>
      </form>
      <p data-testid="displayed-name">Name: {name}</p>
      <p data-testid="displayed-age">Age: {age}</p>
      <p data-testid="displayed-new-age">New Age: {newAge}</p>
      <p data-testid="displayed-gender">Gender: {gender}</p>
    </div>
  );
};

export default Person;
