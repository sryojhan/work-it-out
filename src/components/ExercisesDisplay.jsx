import ExerciseCard from "./ExerciseCard";

import "../styles/exercises.css"

function ExercisesDisplay({routine}){

    return <> 
    
        { routine.length > 0 ?
            <div className="exercise-display">
                {routine.map((exercise, idx) => 
                    <ExerciseCard key={`Exercise card ${idx}`} name={exercise.name} muscleGroup={exercise.muscleGroup}></ExerciseCard>
                )}
            </div>
            :
            <h1>Random exercises for each muscle group!</h1>
        }
        
        </>
}


export default ExercisesDisplay;