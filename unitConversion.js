let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1:
        console.log(value + " Feet =", (value * 12), "Inch");
        break;

    case 2:
        console.log(value + " Feet =", (value * 0.3048), "Meter");
        break;

    case 3:
        console.log(value + " Inch =", (value / 12), "Feet");
        break;

    case 4:
        console.log(value + " Meter =", (value * 3.28084), "Feet");
        break;

    default:
        console.log("Enter valid choice:\n1.Feet→Inch  2.Feet→Meter  3.Inch→Feet  4.Meter→Feet");
}
