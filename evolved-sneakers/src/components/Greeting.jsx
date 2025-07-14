const Greeting = ({timeOfDay}) => {
    
    return (
        <div>
            {
                timeOfDay == "Morning" 
                ? <h2>Good Morning!</h2>
                : timeOfDay == "Afternoon" 
                ? <h2>Good Afternoon</h2>
                : <h2>Good Evening</h2>
            }
        </div>
    );
}

export default Greeting;