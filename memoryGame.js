document.addEventListener('DOMContentLoaded',()=>{


//create all cards  
 const cardArray = [
    {
        name:'agadir',
        img:"images/agadir.png"
    },
    {
        name:'agadir',
        img:"images/agadir.png"
    },
    {
        name:"chat",
        img:"images/chat.png"
    },
    {
        name:"chat",
        img:"images/chat.png"
    },
    {
        name:"fleurs",
        img:"images/fleurs.png"
    },
    {
        name:"fleurs",
        img:"images/fleurs.png"
    },
    {
        name:"maison",
        img:"images/maison.png"
    },
    {
        name:"maison",
        img:"images/maison.png"
    },
    {
        name:"parc",
        img:"images/parc.png"
    },
    {
        name:"parc",
        img:"images/parc.png"
    },
    {
        name:"pasteque",
        img:"images/pasteque.png"
    },
    {
        name:"pasteque",
        img:"images/pasteque.png"
    },
    {
        name:"tajine",
        img:"images/tajine.png"
    },
    {
        name:"tajine",
        img:"images/tajine.png"
    },
    {
        name:"voiture",
        img:"images/voiture.png"
    },
    {
        name:"voiture",
        img:"images/voiture.png"
    }
] 
cardArray.sort(()=> 0.5-Math.random());

const grid = document.querySelector('.grid');
const resultDisplay= document.querySelector('#result');
const messageDisplay=document.querySelector('#message');
const tried=document.querySelector('#try');
var cardChosen = [];
var cardChosenId = [];
var cardWon=[];
var numberOfTry=0;

// creat board
function createBoard(){
    console.log(cardArray.length)
    for (let i=0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src','images/puzzle.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

//check for Match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] === cardChosen[1]){
        messageDisplay.textContent="*** Bravo !!! ***"
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        cardWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src','images/puzzle.png');
        cards[optionTwoId].setAttribute('src','images/puzzle.png');
        messageDisplay.textContent="Essaie encore!"
        
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent= cardWon.length;
    if(cardWon.length===cardArray.length/2){
        resultDisplay.textContent = 'Félicitation!'
        window.location.reload(forcedReload);

    }
}



//flipCard
function flipCard (){
    
    tried.textContent=numberOfTry;
    messageDisplay.textContent=" "
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosenId.length==2){
        numberOfTry++;
        setTimeout(checkForMatch, 500)
    }
};


createBoard();



})
