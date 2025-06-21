

function GenerateButton({ generate }) {

    return <button className="generate-button" onClick={() => {
        generate();
    }}>Generate!</button>;

}


export default GenerateButton;