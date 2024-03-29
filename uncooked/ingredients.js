import {soups, days} from './soupDays';

let index = 0;
const soupParagraph = document.getElementById('soup');
const dayParagraph = document.getElementById('day');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const setSoupAndDay = () => {
  soupParagraph.innerHTML = soups[index];
  dayParagraph.innerHTML = days[index];
}
setSoupAndDay();
const tomorrow = () => {
  index = (index + 1) % days.length;
  setSoupAndDay();
}
nextButton.addEventListener('click', tomorrow);
const yesterday = () => {
  index = (index - 1 + days.length) % days.length;
  setSoupAndDay();
}
previousButton.addEventListener('click', yesterday);