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

        return exercise;
    }


    /**
     * @param {Array} muscleGroups
     * @param {number} length 
     * @returns {Exercise[]} generated routine
     */
    const GenerateRoutine = function (muscleGroups, length) {

        const selectedExercises = [];

        let counter = 0;

        Array.from({ length: length }).forEach(_ => {

            const muscleGroup = ChooseRandomFromArray(muscleGroups);

            const muscleGroupsData = exercises[muscleGroup];

            let exercise = SelectRandomMuscleGroupExercise(muscleGroupsData);


            while(selectedExercises.includes(exercise)){

                counter++;
                exercise = SelectRandomMuscleGroupExercise(muscleGroupsData);
            }

            selectedExercises.push(exercise);
        });

        console.log(counter);

        return selectedExercises;
    }




    return { GenerateRoutine };
})();


export default RoutineGenerator;