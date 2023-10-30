// src/ParameterSection.js
import React, { useState, useEffect } from 'react';

function ParameterSection({ parameters, addParameter, removeParameter, setParameter }) {
  const [dropdownValues, setDropdownValues] = useState({
    Name: [],
    Manager: [],
    Department: [],
    Client: [],
  });
  
  useEffect(() => {
    // Make API call to get values based on the selected dropdown type
    const selectedDropdownType = parameters[0].name;

    // fetch(`DummyAPI`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDropdownValues((prevValues) => ({
    //       ...prevValues,
    //       [selectedDropdownType]: data,
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log('');
    //   });
    var data = ['A','B','C','D'];
        setDropdownValues((prevValues) => ({
          ...prevValues,
          [selectedDropdownType]: data,
        }));
  }, [parameters]);
  
  
  const handleNameChange = (index, selectedName) => {
    const updatedParameters = [...parameters];
    updatedParameters[index].name = selectedName;
    updatedParameters[index].value = '';
    setParameter(updatedParameters);
  };
    
      const handleValueChange = (index, newValue) => {
        const updatedParameters = [...parameters];
        updatedParameters[index].value = newValue;
        setParameter(updatedParameters);
      };
  return (
    <div>
      <h2>Parameter Section</h2>
      <table className="table table-bordered">
            <tbody>
      {parameters.map((param, index) => (
        
            <tr key={index}>
        
            <td>
          <select className="table-select"
          value={param.name}
          onChange={(e) => handleNameChange(index, e.target.value)}>
            <option value={''}>Select a Value</option>
            <option value={'Name'}>Name</option>
            <option value={'Manager'}>Manager</option>
            <option value={'Department'}>Department</option>
            <option value={'Client'}>Client</option>
          </select>
          </td>
          <td>
          {dropdownValues[param.name] && dropdownValues[param.name].length > 0 ? (
          <select className="table-select"
        value={param.value}
        onChange={(e) => handleValueChange(index, e.target.value)}
      >        
        {dropdownValues[param.name].map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          
      </select>
      ) : null}
          </td>
          
          <td>
          {parameters.length < 5 && (
        <button className="add-data" onClick={addParameter}><i className="fa-solid fa-plus"></i></button>
      )}
      
          {index > 0 && (
            <button className="remove-data" onClick={() => removeParameter(index)}><i class="gg-trash"></i></button>
          )}
          </td>
        </tr>
        
      ))}  
      </tbody>
        </table>    
    </div>
  );
}

export default ParameterSection;
