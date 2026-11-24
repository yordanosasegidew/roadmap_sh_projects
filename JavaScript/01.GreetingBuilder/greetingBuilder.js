function formatName(firstName, lastName){
    return firstName + ' ' + lastName;
}

function getGreeting(timeOfDay){
    if(timeOfDay === "morning"){
        return "Good morning";
    }
    if(timeOfDay === "afternoon"){
        return "Good afternoon";
    }
        return "Good evening";
}

function createGreeting(firstName, lastName, timeOfDay){
    greeting = getGreeting(timeOfDay);
    name = formatName(firstName, lastName);
    return greeting + ', ' + name
}

console.log(createGreeting("John","Anderson","morning"));
console.log(createGreeting("Thomas","O'Reilly","afternoon"));
console.log(createGreeting("McKinsey","Alfred","evening"));