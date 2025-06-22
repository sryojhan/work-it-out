import { useState } from 'react'

import RoutineGenerator from "./utils/RoutineGenerator";

import ExercisesDisplay from './components/ExercisesDisplay'
import ExerciseOptions from './components/ExerciseOptions'
import GenerateButton from './components/GenerateButton'


function App() {

  const [routine, setRoutine] = useState([]);

  const muscleGroups = RoutineGenerator.GetAllMuscleGroups();

  const [selected, setSelected] = useState(Array(muscleGroups.length).fill(false));

  const toggleSelection = (idx) => {

    const newSelection = [...selected];
    newSelection[idx] = !newSelection[idx];
    setSelected(newSelection);
  };



  let count = 5;

  const generateRoutine = () => {

    const selectedMuscleGroups = selected.reduce((arr, value, idx)=>{
      if(value) arr.push(idx);
      return arr;
    }, []).map(value => muscleGroups[value]);

    if(selectedMuscleGroups.length === 0) return;

    setRoutine(RoutineGenerator.GenerateRoutine(selectedMuscleGroups, count));
  }

  return (
    <>
      <ExerciseOptions key='options' selected={selected} toggleSelection={toggleSelection} muscleGroups={muscleGroups}></ExerciseOptions>
      <ExercisesDisplay key='display' routine={routine}></ExercisesDisplay>
      <GenerateButton key='generate-button' generate={generateRoutine} ></GenerateButton>
    </>
  )
}

export default App
