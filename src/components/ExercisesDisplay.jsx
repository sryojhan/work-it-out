import { useState } from "react";
import RoutineGenerator from "../utils/RoutineGenerator";
import ExerciseCard from "./ExerciseCard";


function ExercisesDisplay({count = 5}){


    const [routine, setRoutine] = useState([]);

    return <div>
        {routine.map((exercise, idx) => 
            <ExerciseCard key={`Exercise card ${idx}`} name={exercise.name}></ExerciseCard>
        )}
        <button onClick={()=>{
            setRoutine(RoutineGenerator.GenerateRoutine(["chest"], count));

        }}>Generate!</button>
        </div>
}


export default ExercisesDisplay;