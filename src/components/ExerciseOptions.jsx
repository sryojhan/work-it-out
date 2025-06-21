import { useState } from "react";


function ExerciseOptions({ selected, toggleSelection, muscleGroups }) {


    return <div className="options"> {
        muscleGroups.map((name, idx) =>
            <button key={`muscle-group-selection-button: ${name}`} className={selected[idx] ? 'selected-button' : 'unselected-button'} onClick={
                ()=>{toggleSelection(idx)}
            } >{name}</button>)
    } </div>
}


export default ExerciseOptions;