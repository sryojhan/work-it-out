

function ExerciseCard({name, muscleGroup}){

    return <div className="exercise-card">

        <h4>{muscleGroup}</h4>
        <h2>{name}</h2>
        <button className="lock-button">🔒</button>
    </div>
}


export default ExerciseCard;