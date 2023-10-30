// src/ParameterSection.js
import React from 'react';

function ParameterSection({ parameters, addParameter, removeParameter, setParameter }) {
    const handleNameChange = (index, selectedName) => {
        const updatedParameters = [...parameters];
        updatedParameters[index].name = selectedName;
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
            <option value={'Name'}>Name</option>
            <option value={'Manager'}>Manager</option>
            <option value={'Department'}>Department</option>
            <option value={'Client'}>Client</option>
          </select>
          </td>
          <td>
          <input
            type="text"
            placeholder="Enter details"
            value={param.value}
            onChange={(e) => handleValueChange(index, e.target.value)}
          />
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
