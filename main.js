//variables 
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//function to randomly select a string from array. 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//the main story
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//first array
const insertX = [
"Willy the Goblin",
"Big Daddy",
"Father Christmas",
];

//second array
const insertY = [
"the soup kitchen",
"Disneyland",
"the White House",
];

//third array
const insertZ = [
"spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away",
];

//add event listener to the randomize button
randomize.addEventListener('click', result);

//the function that runs when the randomize button is clicked
function result() {
    //store the main story in a variable called newStory 
  let newStory = storyText;

  //call the randomValueFromArray function on each array and store the refrence inside xItem, yItem and zItem variable
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //replace the string ":insertx:, :inserty: and :insertz:"in the main story with the randomize variable 
  newStory = newStory.replace(/:insertx:/g, xItem)
                     .replace(/:inserty:/g, yItem)
                     .replace(/:insertz:/g, zItem);
  //if the name input is not empty replace Bob with the name you entered 
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }
  //if the uk radio input is clicked then 
  if(document.getElementById("uk").checked) {

    //convert weight to stone
    const weight = Math.round(300 / 14) + ` stone`;

    //convert temperature to centigrade
    const temperature =  Math.round((94 - 32) * (5/9)) + ` centigrade`;
  //replace "94 fahrenheit" in main story with the fomula for cal temperature
   newStory = newStory.replace("94 fahrenheit", temperature);
   newStory = newStory.replace("300 pounds", weight);
  };

  //output is equals to newStory
  story.textContent = newStory;
  story.style.visibility = 'visible';
};