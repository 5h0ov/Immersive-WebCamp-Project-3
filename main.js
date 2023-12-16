const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

// console.log(flashcardsData.length)

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');

var score = document.getElementById('score-card');
var incorrect = document.getElementById('incorrect-card');
const flashcardsContainer = document.getElementById('flashcards');
let clickedFlashcards = [];
let c=0;

const handleStart = () => {
  flashcardsContainer.innerHTML = '';
  c=0;

  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'correct border-2 border-green-500 hover:bg-green-100 transition duration-300 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    p=-1;
    
    //* Card click event
    cardElement.addEventListener('click', () => {
      if(cardElement.classList.contains('correct')){
        console.log(item.word);
        cardElement.classList.add('border-red-500', 'hover:bg-red-100');
        cardElement.classList.remove('correct');
        cardElement.innerText = item.meaning;
        clickedFlashcards.push(item);
        updateScore(p);
        p--;
        c++;
    }});
  });

  score.classList.remove('hidden');
  resetButton.classList.remove('hidden');
  doneButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  incorrect.classList.add('hidden');
  
  score.textContent = "SCORE: "+ flashcardsData.length;
};

function updateScore(point) {
  score.textContent = "Score: "+ (flashcardsData.length + point);
}

const handleReset = () => {
  cardContainer.innerHTML = '';
  c=0;
  
  clickedFlashcards = [];
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  score.textContent = "Score: "+ flashcardsData.length;
  score.classList.add('hidden');
};

const handleDone = () => {
   // Display the container with incorrect cards
   cardContainer.innerHTML = '';

   clickedFlashcards.forEach(item => { 
    let flashcard = document.createElement('div');
    flashcard.className = 'border-2 border-red-500 rounded-md p-5 h-full font-semibold text-md';
    flashcard.innerText = item.word + ":  " + item.meaning;
    flashcardsContainer.appendChild(flashcard);
  });
  clickedFlashcards = [];
  
  incorrect.textContent = "You got "+ c +"/"+ flashcardsData.length +" incorrect!";
  incorrect.classList.remove('hidden');
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  flashcardsContainer.classList.remove('hidden');
};
