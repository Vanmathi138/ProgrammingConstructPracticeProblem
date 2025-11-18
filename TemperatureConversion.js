function convertTemperature(choice, value) {
    switch (choice) {
        case "CtoF": 
            if (value >= 0 && value <= 100) {
                return (value * 9/5) + 32;
            } else {
                return "Celsius must be between 0°C and 100°C";
            }

        case "FtoC":  
            if (value >= 32 && value <= 212) {
                return (value - 32) * 5/9;
            } else {
                return "Fahrenheit must be between 32°F and 212°F";
            }

        default:
            return "Invalid Selection";
    }
}

console.log(convertTemperature("CtoF", 25)); 
console.log(convertTemperature("FtoC", 100)); 
