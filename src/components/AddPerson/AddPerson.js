import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = ({ personAdded }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);

    return (
        <div className="AddPerson">
            <input
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                value={name}
                />
            <input
                type="number"
                placeholder="Age"
                onChange={e => setAge(e.target.value)}
                value={age}
            />
            <button onClick={() => personAdded(name, age)}>Add Person</button>
        </div>
    );
};

export default addPerson;
