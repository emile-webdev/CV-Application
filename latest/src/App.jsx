import { useState } from 'react';
import { Title } from './components/Content';
import { GeneralInfo, Education, WorkExperience } from './components/About';
import { Cv } from './components/Cv'

function Builder() {
  return ( 
    <>
      <div className="builder">
        <GeneralInfo />
        <Education />
        <WorkExperience />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Title />
      <Builder />
      <Cv />
    </>
  )
}

export default App
