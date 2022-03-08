let game = document.getElementById('game')

let imageUrl = 'https://picsum.photos/id/{id}/85/125'
let images = [
    0, 1, 100, 1000
]

function generateCard(image, imageID){
    let div = document.createElement('div') // <div></div>
    div.classList.add('card') // <div class="card"></div>
    div.setAttribute('data-imageID', imageID)
    
    let cardFront = document.createElement('div')
    cardFront.classList.add('card-front')
    cardFront.setAttribute('data-imageID', imageID)
    
    
    let cardBack = document.createElement('div')
    cardBack.classList.add('card-back')
    cardBack.innerHTML = image

    let cardInner = document.createElement('div')
    cardInner.classList.add('card-inner')
    
    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)

    div.appendChild(cardInner)


    return div // object
}

function generateImage(id)
{
    let img = document.createElement('img') // <img>
    img.src = imageUrl.replace('{id}', id)
    return img
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  /*var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);*/

shuffle(images)

for (let index = 0; index < 4; index++) {

    let newImageID = images[index]
    let newImage = generateImage(newImageID).outerHTML

    let newCard = generateCard(newImage, newImageID)

    game.innerHTML += newCard.outerHTML
}

shuffle(images)

for (let index = 0; index < 4; index++) {

    let newImageID = images[index]
    let newImage = generateImage(newImageID).outerHTML

    let newCard = generateCard(newImage, newImageID)

    game.innerHTML += newCard.outerHTML
}


let cards = document.getElementsByClassName('card')
let imageID1 = undefined
let imageID2 = undefined
for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener('click', function(event){
        //console.log('clicked');
        event.currentTarget.classList.add('opened')

        // find all opened cards 
        let openedCards = document.getElementsByClassName('opened')

        console.log(openedCards);

        // flip card
        cards[index].querySelector('.card-inner').classList.add('flip-show')

        // check open cards
        if (openedCards.length == 2){
            imageID2 = openedCards[1].dataset.imageid
            imageID1 = openedCards[0].dataset.imageid
        }

        if (imageID1 == imageID2 && openedCards.length == 2)
        {
            // find opened class and freese
            openedCards[0].querySelector('card-back').classList.add('flip-and-freeze')
            openedCards[1].querySelector('card-back').classList.add('flip-and-freeze')
            imageID1 = undefined
            imageID2 = undefined
        } else {
            setTimeout(function(){
                openedCards = document.getElementsByClassName('opened')

                openedCards[0].querySelector('.card-inner').classList.remove('flip-show')
                openedCards[0].classList.remove('opened')

                openedCards[1].querySelector('.card-inner').classList.remove('flip-show')
                openedCards[1].classList.remove('opened')

                imageID1 = undefined
                imageID2 = undefined
                
            }, 2000)
   
        }
        
    })
}