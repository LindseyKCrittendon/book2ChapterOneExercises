// instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

var firstName = "Lindsey";
var lastName = "Crittendon";
var age = 34;
var likesTravel = true;
console.log(firstName, lastName, age, likesTravel)
// separate these out if you want them to show up on different lines.

// Arrays

var choreList = ["dishes", "laundry", "run the vacuum", "take out the trash", "walk the dogs"]
console.log(choreList)
console.log(choreList[1])

// Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.
var movieArray = ["Pulp Fiction", "Eternal Sunshine of the Spotless Mind", "Inglorious Basterds"]
console.log(movieArray)
console.log(movieArray[0])
console.log(movieArray[1])
console.log(movieArray[2])

// Objects - a collection of data

var mia = {
    species: "dog",
    likesNoise: true,
    age: .7,
    toyArray: ["alligator", "bone", "sheep"],
    peopleObject: {
        mom: "Cas",
        dad: "Tommy",
    } 
}

// Lightning Exercise 3
// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

var lindseyObject = {
    firstName: "Lindsey",
    lastName: "Crittendon",
    age: 34,
    likesTravel: true,
    favoriteMovies: ["Pulp Fiction", "Eternal Sunshine of the Spotless Mind", "Inglorious Basterds"],

}

console.log(lindseyObject)
console.log(lindseyObject.favoriteMovies[0])

// dot notation
console.log(lindseyObject.firstName)
console.log(lindseyObject.favoriteMovies[1])

console.log(mia.peopleObject)
console.log(mia.peopleObject.mom)

// Bracket notation

console.log(lindseyObject["age"])
console.log(lindseyObject["favoriteMovies"])
console.log(lindseyObject["favoriteMovies"][1])

console.log(mia["peopleObject"]["dad"])

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.contents[0])
console.log(wardrobe.contents[1])
console.log(wardrobe.contents[2])
console.log(wardrobe.contents[3])
console.log(wardrobe.contents[4])
console.log(wardrobe.depth)
console.log(wardrobe.width)

// Lightning Exercises
// Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength)
// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
var address = "address"
var taco = "cost"
var owner = "owner"
var pizza = "architect"
var date = "constructionDate"

console.log(empireStateBuilding[address])
console.log(empireStateBuilding[taco])
console.log(empireStateBuilding[owner])
console.log(empireStateBuilding[pizza])
console.log(empireStateBuilding[date])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
console.log(nashvilleSoftwareSchool.instructors.partTime, nashvilleSoftwareSchool.instructors.fullTime)

// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])

// Practice: Accessing Property Values
// Given the following object...

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.  He was born in ${beatles.members[1].birth}.  He contributed heavily to the ${beatles.albums[3]} Album.`)