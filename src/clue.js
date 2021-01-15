// Suspects Collection
const suspectsArray = [
  {
      first_name:   'Jacob',
      last_name:    'Green',
      color:        'green',
      description:  'He has a lot of connections',
      age:          '45',
      image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
      occupation:   'Entrepreneur'
    },
    {
      first_name:   'Doctor',
      last_name:    'Orchid',
      color:        'white',
      description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
      age:          '26',
      image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
      occupation:   'Scientist'
    },
    {
      first_name:   'Victor',
      last_name:    'Plum',
      color:        'purple',
      description:  'Billionare video game designer',
      age:          '22',
      image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
      occupation:   'Designer'
    },
    {
      first_name:   'Kasandra',
      last_name:    'Scarlet',
      color:        'red',
      description:  'She is an A-list movie star with a dark past',
      age:          '31',
      image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
      occupation:   'Actor'
    },
    {
      first_name:   'Eleanor',
      last_name:    'Peacock',
      color:        'blue',
      description:  'She is from a wealthy family and uses her status and money to earn popularity',
      age:          '36',
      image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
      occupation:   'Socialité'
    },
    {
      first_name:   'Jack',
      last_name:    'Mustard',
      color:        'yellow',
      description:  'He is a former football player who tries to get by on his former glory',
      age:          '62',
      image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
      occupation:   'Retired Football player'
    }
];
// Rooms Collection
const roomsArray = [
{ name: 'Dinning Room' },
{ name: 'Conservatory' },
{ name: 'Kitchen' },
{ name: 'Study' },
{ name: 'Library' },
{ name: 'Billiard Room' },
{ name: 'Lounge' },
{ name: 'Ballroom' },
{ name: 'Hall' },
{ name: 'Spa' },
{ name: 'Living Room' },
{ name: 'Observatory' },
{ name: 'Theater' },
{ name: 'Guest House' },
{ name: 'Patio' },
];
// Weapons Collection
const weaponsArray = [
{ name: 'rope',         weight: 10 },
{ name: 'knife',        weight: 8 },
{ name: 'candlestick',  weight: 2 },
{ name: 'dumbbell',     weight: 30 },
{ name: 'poison',       weight: 2 },
{ name: 'axe',          weight: 15 },
{ name: 'bat',          weight: 13 },
{ name: 'trophy',       weight: 25 },
{ name: 'pistol',       weight: 20 },
];

// ITERATION 2

function selectRandom(array){
  return array[Math.floor(Math.random()*array.length)]
}

function pickMystery() {
  let mystery = {} 
  mystery.suspect = selectRandom(suspectsArray)
  mystery.room = selectRandom(roomsArray)
  mystery.weapon = selectRandom(weaponsArray)
  return mystery
}

pickMystery ()


// ITERATION 3

function revealMystery(answer) {
  return ``
  // ${answer.suspect.first_name} ${answer.suspect.last_name} killed Mr. Boddy using the ${answer.weapon.name} in the ${answer.rooms.name}!
}



// revealMystery ()
// console.log (revealMystery)






























// let character = {
//   name: "zelda", occupation:"princess"  
// }


// character.boyfriend = "Link"


// console.log (character.boyfriend)

// let character2 = {
//   name: "Ganon", occupation: "Wizard"
// }

// character2.folk = "Gerudo"

// console.log (character2.name)


// let allCharacters = ["Ganon", "Zelda"]

// console.log (allCharacters[0])

// let allCharactersObjects = [character, character2]

// console.log (allCharactersObjects)

// console.log (allCharactersObjects[1])

// console.log (allCharactersObjects[1].occupation)

// console.log (allCharactersObjects[0].boyfriend)

// let character3 = {
//   name: "Link", occupation: "Warrior"
// }

// character3.weapon = "Master Sword"

// console.log (character3)

// // allCharactersObjects[2] = character3

// allCharactersObjects.push(character3)

// console.log(allCharactersObjects)

// console.log (allCharactersObjects[selectRandom(allCharactersObjects)].occupation)


// function selectRandom(arr){
//   return Math.floor(Math.random()*arr.length)
// }