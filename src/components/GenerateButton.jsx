

function GenerateButton({ generate }) {

    return <button onClick={() => {
        generate();
    }}>Generate!</button>;

}


export default GenerateButton;