/* **The Temperature Converter**
It's hot out! Not. Let's make a converter based on the steps here.


Create a function called celsiusToFahrenheit: */
const celsiusToFahrenheit = (celsius) => ((celsius * 1.8) + 32)
/* Store a celsius temperature into a variable.
Convert it to fahrenheit and output "X°C is Y°F". */
const celsius = 20
console.log(celsius + '°C is '+ celsiusToFahrenheit(celsius) + '°F')

/*Create a function called fahrenheitToCelsius: */
/*Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "X°F is Y°C." */
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit / 1.8) - 32);
const fahrenheit = 68
console.log(fahrenheit + ' °F is '+ fahrenheitToCelsius(fahrenheit) + ' °C')

/* **The Puppy Age Calculator**
You know how old your dog is in human years, but what about dog years? Calculate it! */

/* Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

const calculateDogAge = (puppyAge) => (puppyAge * 7 )
const Beno = 3
const Chicko = 8
const Rex = 5
console.log("Your doggie is " + calculateDogAge(Beno) + " years old in human years!")
console.log("Your doggie is " + calculateDogAge(Chicko) + " years old in human years!")
console.log("Your doggie is " + calculateDogAge(Rex) + " years old in human years!")

const calculateHumanAge = (humanAge) => (humanAge / 7)
const elliAge = 31
console.log("You are " + calculateHumanAge(elliAge) + " years old in dog years!")





