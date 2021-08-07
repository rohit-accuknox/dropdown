import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

let reset = ["Cricket", "Football", "Basketball", "Hockey","Tennis"];

function App() {
  const [selecteddata, setSelecteddata] = useState([]);
  const [optiondata, setOptiondata] = useState([
    "Cricket",
    "Football",
    "Basketball",
    "Hockey",
    "Tennis"
  ]);

  const addTag = (event) => {
    setSelecteddata([...selecteddata, event.target.value]);
    const addOption = optiondata.filter((e) => e !== event.target.value);
    setOptiondata(addOption);
  };

  const deleteTag = (deletedVal) => {
    const newdata = selecteddata.filter((i) => i !== deletedVal);
    setSelecteddata(newdata);
    setOptiondata([...optiondata, deletedVal]);
  };

  const clearAll = () => {
    setSelecteddata([]);
    setOptiondata(reset);
  };

  const clear = (event) => {
    event.target.value = "";
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h5 className="mb-2">Selector Label <span className="text-danger">*</span></h5>
          <div className="tags-dropdown">
            <ul className="tags">
              {selecteddata.map((tag, id) => (
                <li key={id} className="tag">
                  <span> {tag} </span>
                  <button
                    className="fas fa-times"
                    onClick={() => deleteTag(tag)}
                  ></button>
                </li>
              ))}
            </ul>
            <input
              type="input"
              autoComplete="off"
              id="input"
              list="sports"
              onSelect={clear}
              onChange={addTag}
            />
            <i className="fas fa-times btn p-2" onClick={clearAll}></i>

            <datalist id="sports" onChange={addTag}>
              {optiondata.map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </datalist>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
