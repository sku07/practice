// src/PromptSection.js
import React from 'react';

function PromptSection({ prompt, setPrompt }) {
  return (
    <div>
      <div>Prompt</div>
      <textarea
        placeholder="Enter your feedback prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
}

export default PromptSection;
