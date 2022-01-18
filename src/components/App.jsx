import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "John",
    lName: "Doe"
  });
  // const [firstName, setfirstName] = useState("John")
  // const [lastName, setlastName] = useState("Doe")
  // let fullName = { fName: "John", lName: "Doe" };

  function handleChange(e) {
    console.log("an input is changed");

    // const inputValue = e.target.value
    // const inputName = e.target.name
    // console.log(inputValue)
    // console.log(inputName)

    const { value, name } = e.target;
    console.log(value);
    console.log(name);

    if (name === "fName") {
      console.log("Updating First Name");
      // console.log(fullName);
      // setFullName({fName: value})
      setFullName((prevFullName) => {
        return {
          fName: value,
          lName: prevFullName.lName
        };
      });
    } else if (name === "lName") {
      console.log("Updating Last Name");
      // console.log(fullName);
      // setFullName({lName: value})
      setFullName((prevFullName) => {
        return {
          fName: prevFullName.fName,
          lName: value
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
