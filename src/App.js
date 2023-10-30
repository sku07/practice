// src/App.js
import React, { useState } from 'react';
import ParameterSection from './ParameterSection';
import PromptSection from './PromptSection';
import './App.css';

function App() {
  const [parameters, setParameters] = useState([
    { name: 'Name', value: '' }
  ]);
  const [prompt, setPrompt] = useState('');
  const [feedbackData, setFeedbackData] = useState({
    consolidated: '',
    improvement: '',
    strength: '',
  });

  const [feedbackGenerated, setFeedbackGenerated] = useState(false);

  const addParameter = () => {
    if (parameters.length < 5) {
      setParameters([...parameters, { name: 'Name', value: '' }]);
    }
  };

  const removeParameter = (index) => {
    const updatedParameters = parameters.filter((_, i) => i !== index);
    setParameters(updatedParameters);
  };

  const clearAll = () => {
    setParameters([{ name: '', value: '' }]);
    setPrompt('');
  };

  const generateFeedback = async () => {
    try {
      // Prepare the data to send to the Python API
      const data = {
        prompt,
        parameters,
      };
      var json = JSON.stringify(data);
      console.log(json);
      // Update the feedbackData state
      setFeedbackData({
        consolidated: 'Consolidated feedback data for an employee',
        improvement: 'These are the improvement',
        strength: 'These are the strenghts',
      });
      setFeedbackGenerated(true);
      // const response = await fetch('YOUR_PYTHON_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
  
      // if (response.ok) {
      //   const feedback = await response.text(); // Assuming the API returns text
      //   console.log('Feedback:', feedback);
  
      //   // You can update the UI with the feedback string here
      // } else {
      //   console.error('Failed to fetch feedback:', response.status, response.statusText);
      //   // Handle the error or show an error message to the user
      // }
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-lg">
      <div className='table-responsive'>
        <div className='table-wrapper'>
      <div className='table-title'>Feedback App</div>
      <div className='table-inner'>
      <PromptSection prompt={prompt} setPrompt={setPrompt}  />
      <ParameterSection
        parameters={parameters}
        addParameter={addParameter}
        removeParameter={removeParameter}
        setParameter={setParameters}
      />      
      <button className="btn btn-info feedback" onClick={generateFeedback}>Generate Feedback</button>
      <button className="btn btn-info clear" onClick={clearAll}>Clear</button>
      {feedbackGenerated && (
      <div className="feedback-divs">
        <div className="consolidated-feedback">
          <p>Consolidated Feedback</p>
          <p>{feedbackData.consolidated}</p>
        </div>
        <div className="improvement-areas">
          <p>Improvement Areas</p>
          <p>{feedbackData.improvement}</p>
        </div>
        <div className="strength-areas">
          <p>Strength Areas</p>
          <p>{feedbackData.strength}</p>
        </div>
      </div>
)}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
