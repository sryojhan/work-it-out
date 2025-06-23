import { useState } from 'react'

import RoutineGenerator from "./utils/RoutineGenerator";

import ExercisesDisplay from './components/ExercisesDisplay'
import ExerciseOptions from './components/ExerciseOptions'
import GenerateButton from './components/GenerateButton'
import MadeByFooter from './components/MadeByFooter';


function App() {

  let count = 5;

  const [routine, setRoutine] = useState([]);

  const muscleGroups = RoutineGenerator.GetAllMuscleGroups();

  const [selected, setSelected] = useState(Array(muscleGroups.length).fill(false));

  const [locked, setLocked] = useState(Array(count).fill(false));

  const toggleSelection = (idx) => {

    const newSelection = [...selected];
    newSelection[idx] = !newSelection[idx];
    setSelected(newSelection);
  };


  const toggleLocked = (idx) => {

    const newLocked = [...locked];
    newLocked[idx] = !newLocked[idx];
    setLocked(newLocked);
  }


  const generateRoutine = () => {

    const selectedMuscleGroups = selected.reduce((arr, value, idx) => {
      if (value) arr.push(idx);
      return arr;
    }, []).map(value => muscleGroups[value]);

    if (selectedMuscleGroups.length === 0) return;


    const alreadySelected = locked.map((value, idx) => value ? routine[idx] : null);

    setRoutine(RoutineGenerator.GenerateRoutine(selectedMuscleGroups, count, alreadySelected));
  }

  return (
    <>
      <ExerciseOptions key='options' selected={selected} toggleSelection={toggleSelection} muscleGroups={muscleGroups}></ExerciseOptions>
      <ExercisesDisplay key='display' routine={routine} locked={locked} setLocked={toggleLocked}></ExercisesDisplay>
      <GenerateButton key='generate-button' generate={generateRoutine} ></GenerateButton>
      <MadeByFooter></MadeByFooter>
    </>
  )
}

export default App
