const cardContent = [
    { id: 01,
        title: "Votre studio",
        price: "390",
    },
    { id: 02,
        title: "Votre 2 piéces",
        price: "570", 
    },
    { id: 03,
        title: "Votre 3 piéces",
        price: "814",
    },
    { id: 04,
        title: "Votre 4 piéces",
        price: "972",
    } 
]

const cardsContainer = document.querySelector('#cards-container')
const cardTemplate = document.querySelector('#card-template')

if(cardsContainer) {
    cardContent.forEach(cardData => {
        const card = cardTemplate.content.cloneNode(true)

        card.querySelector('.title').textContent = cardData.title
        card.querySelector('.amount').textContent = `${cardData.price}€`

        cardsContainer.appendChild(card)
    })
}

console.log('blaaaa')