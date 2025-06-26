import exercises from "../data/exercises.json"



const RoutineGenerator = (function () {


    /**
     * @param {Array} arr 
     * @returns Random element from the array
     */
    const ChooseRandomFromArray = function (arr) {

        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
    * @typedef {Object} Exercise
    * @property {string} id
    * @property {string} name
    * @property {number} priority
    * @property {string} muscleGroup
    * @property {string} muscleSection
    * 
    */


    /**
     * @return {Exercise}
     */
    const SelectRandomMuscleGroupExercise = function (muscleGroupsData) {

        const muscleSection = ChooseRandomFromArray(Object.keys(muscleGroupsData));

        const exercise = ChooseRandomFromArray(muscleGroupsData[muscleSection]);

        return {...exercise, muscleSection};
    }


    /**
     * @param {Array} muscleGroups
     * @param {number} length 
     * @returns {Exercise[]} generated routine
     */
    const GenerateRoutine = function (muscleGroups, length, alreadySelected) {


        const lockedExercisesCount = alreadySelected.reduce((acum, value) => acum += value !== null ? 1 : 0, 0)
        
        const newExercisesLength = length - lockedExercisesCount;
        
        const selectedExercises = [];
        Array.from({ length: newExercisesLength }).forEach(_ => {

            const muscleGroup = ChooseRandomFromArray(muscleGroups);

            const muscleGroupsData = exercises[muscleGroup];

            let exercise = SelectRandomMuscleGroupExercise(muscleGroupsData);


            while(selectedExercises.find(elem => elem.id === exercise.id) || alreadySelected.find(elem => elem && elem.id === exercise.id)){

                exercise = SelectRandomMuscleGroupExercise(muscleGroupsData);
            }

            selectedExercises.push({...exercise, muscleGroup});
        });


        const routine = [...alreadySelected];


        selectedExercises.forEach(elem => {

            const idx = routine.findIndex(value => value === null);
            routine[idx] = elem;
        });

        return routine;
    }



    const GetAllMuscleGroups = function(){

        return Object.keys(exercises);
    }


    return { GenerateRoutine, GetAllMuscleGroups };
})();


export default RoutineGenerator;