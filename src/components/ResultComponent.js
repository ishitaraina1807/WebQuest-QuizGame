import React from 'react';

function ResultComponent(props) { 
  const { score, timeTaken } = props; 

  return (
    <div className='result'>
      <h2>Quiz Result</h2>
      <p>Your Score: {score}/10</p> 
    </div>
  );
}

export default ResultComponent;
