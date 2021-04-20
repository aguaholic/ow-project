const cardContent = [
    {   
        id: 01,
        title: "Votre studio",
        price: "390",
        class: "card-1",
    },
    {   
        id: 02,
        title: "Votre 2 piéces",
        price: "570",
        class: "card-2",

    },
    {   
        id: 03,
        title: "Votre 3 piéces",
        price: "814",
        class: "card-3",
    },
    {   
        id: 04,
        title: "Votre 4 piéces",
        price: "972",
        class: "card-4",
    } 
]

const cardsContainer = document.querySelector('#cards-container')
const cardTemplate = document.querySelector('#card-template')

function card(cardData) {
    const card = cardTemplate.content.cloneNode(true)
    
    card.querySelector('.card').classList.add(cardData.class)
    card.querySelector('.title').textContent = cardData.title
    card.querySelector('.amount').textContent = `${cardData.price}€`

    return card
}

if(cardsContainer && cardsContainer) {
     cardContent.forEach(cardData => {
         cardsContainer.appendChild(card(cardData))
     })
}

const cardsCarousel = document.querySelector('#cards-carousel')

if(cardsCarousel) {
    const carouselItem = cardsCarousel.querySelector('#carousel-item')

    carouselItem.appendChild(card(cardContent[0]))

    const buttons = cardsCarousel.querySelector('.btns')
    cardContent.forEach((cardData, i) => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.setAttribute('index', i)

        if(i === 0) {
            button.classList.add('selected')
        }

        buttons.appendChild(button)

        button.addEventListener('click', () => {
            buttons.querySelector('.selected').classList.remove('selected')
            button.classList.add('selected')

            carouselItem.innerHTML = ''
            carouselItem.appendChild(card(cardContent[i]))
        })
    })

    

}


const listContent = document.getElementById("list-content")

const villeBtn = document.getElementById('btn-ville')

const villeContent =  `
<ul>
    <li>Un charmant village briard bordé par la Marn</li>
    <li>Ses vieilles pierres, son églese et son écluse</li>
    <li>Ses infraestructures scolaires, culturelles et sportives</li>
</ul>
`;

const trajetContent = `
<ul>
    <li>Gare RER/TGV de Chessy à 10 minutes par le bus ligne 24</li>
    <li>Paris porte de Bercy à 35 minutes par l'autoroute A4</li>
    <li>Centre commercial Val d'Europe à 8 minutes en volture</li>
</ul>
  `;

listContent.innerHTML = villeContent

villeBtn.addEventListener("click", function() {
    listContent.innerHTML = villeContent
});

const trajetBtn = document.getElementById('btn-trajet')

trajetBtn.addEventListener("click", function() {
    listContent.innerHTML = trajetContent
});
