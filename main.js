let slideIndex = 1;

const SLIDE_WAIT_IN_SECONDS = 6 

const images = [
    "url('Assets/paul-griffin-WWST6E8LxeE-unsplash.jpg')",
    "url('Assets/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg')",
    "url('Assets/toa-heftiba-PSzZSuQsoNU-unsplash.jpg')",
    "url('Assets/urban-gyllstrom-MaWMfm-HCqQ-unsplash.jpg')",
    "url('Assets/alexandra-tran-fWfRv-qdlUU-unsplash.jpg')",
    "url('Assets/casey-lee-awj7sRviVXo-unsplash.jpg')",
    "url('Assets/ivan-stern-LOLSb7m6XkU-unsplash.jpg')",
    "url('Assets/justus-menke-62XLglIrTJc-unsplash.jpg')",
    "url('Assets/karol-chomka-YY-phoTAZjw-unsplash.jpg')",
    "url('Assets/louis-hansel-HF16IxB_tO4-unsplash.jpg')",
    "url('Assets/louis-hansel-tLbGQ1YazV8-unsplash.jpg')",
    "url('Assets/louis-hansel-UtcOhVC-3VU-unsplash.jpg')",
    "url('Assets/louis-hansel-VhqBh21uz0k-unsplash.jpg')",
    "url('Assets/orkun-orcan-epQ32Sf0_XQ-unsplash.jpg')",
]

// Wait function that returns a callback
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Recursive function that renders the slide at the slide index
function showSlides(n) {
    let i = images.length;
    if (slideIndex >= i) {
        slideIndex = 0
    }
    let slide = document.getElementById("slideDiv");
    slide.style.backgroundImage = images[slideIndex];

    sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
        slideIndex += 1;
        showSlides(slideIndex)
    });
}

window.onload=function() {
    sleep(SLIDE_WAIT_IN_SECONDS * 1000).then(() => { 
        slideIndex += 1;
        showSlides(slideIndex)
    });
} 

//Keeps customers from choosing a reservation date for a day that has already passed
function resDate(){
  var today = new Date();
  var dd = today.getDate()+1;
  var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 
  today = yyyy+'-'+mm+'-'+dd;
  document.getElementById("datefield").setAttribute("min", today);
}

//This function will be used to make sure that all fields in the reservation form are filled out before submission
function validateForm() {
  let n = document.forms["reservationForm"]["fname"].value;
  let p = document.forms["reservationForm"]["partyNum"].value;
  let e = document.forms["reservationForm"]["email"].value;
  let f = document.forms["reservationForm"]["phoneNum"].value;
  if (n == "" || p == "" || e == "" || f == "") {
    alert("All fields must be filled out.");
    return false;
  }
  else{
    alert("Your reservation has been succesfully submitted!");
    return true;
  }
}

//This segment of code allows for questions to be asked with the answers appearing with hidden totals in order to return a result.
function createQuiz(){
  const questions = [
      {
        "question": "How hungry are you this evening?",
        "answer1": "Peckish",
        "answer1Total": "50",
        "answer2": "Hungry",
        "answer2Total": "5",
        "answer3": "Very Hungry",
        "answer3Total": "5",
        "answer4": "I could eat a horse",
        "answer4Total": "10"
      },
      {
        "question": "Do you eat meat?",
        "answer1": "Yes",
        "answer1Total": "1",
        "answer2": "Yes, seafood only",
        "answer2Total": "17",
        "answer3": "Yes, no seafood",
        "answer3Total": "1",
        "answer4": "No",
        "answer4Total": "50"
      },
      {
        "question":
          "What flavor profile are you interested in?",
        "answer1": "Unique",
        "answer1Total": "5",
        "answer2": "Saucy",
        "answer2Total": "3",
        "answer3": "Savory",
        "answer3Total": "1",
        "answer4": "Fresh",
        "answer4Total": "3"
      },
      {
        "question": "Are you drinking wine tonight?",
        "answer1": "Yes, a lot",
        "answer1Total": "0",
        "answer2": "Yes, a few glasses",
        "answer2Total": "0",
        "answer3": "Yes, a glass",
        "answer3Total": "0",
        "answer4": "No",
        "answer4Total": "0"
      },
    ]
    
    //Initializes values that do not yet have a variable.
    let currentQuestion = 0;
    let score = [];
    let selectedAnswersData = [];
    const totalQuestions =questions.length;

    //Reads in which buttons are being clicked by the surveyer.
    const container = document.querySelector('.quiz-container');
    const questionEl = document.querySelector('.question');
    const option1 = document.querySelector('.option1');
    const option2 = document.querySelector('.option2');
    const option3 = document.querySelector('.option3');
    const option4 = document.querySelector('.option4');
    const nextButton = document.querySelector('.next');
    const previousButton = document.querySelector('.previous');
    const restartButton = document.querySelector('.restart');
    const result = document.querySelector('.result');
    
  //Creates the field for the questions that are created above.
    function generateQuestions (index) {
    
        const question = questions[index];
        const option1Total = questions[index].answer1Total;
        const option2Total = questions[index].answer2Total;
        const option3Total = questions[index].answer3Total;
        const option4Total = questions[index].answer4Total;
        
        //Sends the question from the index to the HTML file.
        questionEl.innerHTML = `${index + 1}. ${question.question}`
        option1.setAttribute('data-total', `${option1Total}`);
        option2.setAttribute('data-total', `${option2Total}`);
        option3.setAttribute('data-total', `${option3Total}`);
        option4.setAttribute('data-total', `${option4Total}`);
        option1.innerHTML = `${question.answer1}`
        option2.innerHTML = `${question.answer2}`
        option3.innerHTML = `${question.answer3}`
        option4.innerHTML = `${question.answer4}`
    }
    
    //Allows the next button to work and continue to the next question in the quiz.
    function loadNextQuestion () {
        const selectedOption = document.querySelector('input[type="radio"]:checked');
        //Sends an error message if field goes unanswered.
        if(!selectedOption) {
            alert('Please select your answer!');
            return;
        }
    //Counts the total of the score in order to return a result.
        const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

        score.push(answerScore);
    
        selectedAnswersData.push()
        
    //Following code assigns each answer a section of numbers that is accounted for throughout the answers.
    //This allows the ressults of the quiz to be customized to what the customer answered.
        const totalScore = score.reduce((total, currentNum) => total + currentNum);

        currentQuestion++;
    
            
            selectedOption.checked = false;
      
        if(currentQuestion == totalQuestions - 1) {
            nextButton.textContent = 'Finish';
        }

        //Takes point total from the quiz and assigns a result.
        if (totalScore <= 10){
          foodResult = "Bas de Surlonge";
          foodImage = "https://github.com/crankyhamsandwich410/CS221FinalProject/blob/main/Assets/alexandra-tran-fWfRv-qdlUU-unsplash.jpg?raw=true";
          description = "Indulge in our juicy, savory bottom sirlion. Seared to perfection <br> in a way that will most certainly satisfy your taste buds.";
      }
      else if(totalScore >10 && totalScore <= 20){
          foodResult = "Coeur D'agneau Qui Bat";
          foodImage = "https://as1.ftcdn.net/v2/jpg/04/54/81/58/1000_F_454815868_gjlsRfuupBITHGTJnfDidV0XXIdJAujb.jpg";
          description = "Check out our fresh lamb heart! Straight from the lamb and prepared with the upmost care."
      }
      else if (totalScore >20 && totalScore <=30){
          foodResult = "Tagolini au Homard et Truffes"
          foodImage = "https://images.unsplash.com/photo-1572015124294-488267231e35?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          description = "Prepare your taste buds for our exquisite pasta that is served <br> with the delicious flavors of lobster and truffles."
      }
      else{
          foodResult = "Le Poubelle Salade"
          foodImage = "https://github.com/crankyhamsandwich410/CS221FinalProject/blob/main/Assets/louis-hansel-UtcOhVC-3VU-unsplash.jpg?raw=true";
          description = "A simple and refreshing salad that is sure to please. <br> Enjoy this light, vegetarian option that will be sure to impress."
      }

      //Takes the results from the if-else statement and prints results based on quiz score.
        if(currentQuestion == totalQuestions) {
            container.style.display = 'none';
            result.innerHTML =
            `<div class = "quiz-result">
            <h2 class="final-score">Your Meal: ${foodResult}</h2>
            <img id= "foodImage" src= ${foodImage}>
            <class="summary">
                <p>This meal will certainly pique your interest. <br> ${description}</p>
                <button class="restart">Restart Quiz</button>
                </div>`;
            return;
        }
        //Calls the function to create a question
        generateQuestions(currentQuestion);
    }
    
    //Allows the quiz to be reset and taken again.
    function restartQuiz(e) {
        if(e.target.matches('button')) {
          currentQuestion = 0;
          score = [];
          location.reload();
        }
    
    }
    
    //Event Listeners in order to record the answer chosen. 
    generateQuestions(currentQuestion);
    nextButton.addEventListener('click', loadNextQuestion);
    result.addEventListener('click',restartQuiz);

}
