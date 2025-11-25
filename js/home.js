import {videos} from './data.js';

// cria o card de cada video
function createCards(objArray) {
    const card = objArray.map(obj => {
      const { img, title, link} = obj
      return `<div class="col">
                <div class="card-wrapper">
                    <img src="${img}" class="img-fluid" alt="${title}">
                    <div class="card-info">
                        <a href="${link}" target="_blank" class="card-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                            <span class="card-title text-light">${title}</span>
                        </a>
                        
                    </div>
                </div>
            </div>`
    }).join('')

    const row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("my-row")
    row.innerHTML = card

    return row
}

// distribui os cards para seus containers
function renderCards(){
    const cardsArray = videos
    const categories = [
        { name: "Growdev", id: "growcast" },
        { name: "Webinar em Flutter", id: "flutter" },
        { name: "Jornada UX/UI", id: "ux-ui" },
        { name: "Diversos", id: "diversos" }
    ]

    categories.forEach(({ name, id }) => {
        const cardsByCategory = cardsArray.filter(card => card.category === name)
        if (cardsByCategory.length > 0) {
            const category = createCards(cardsByCategory)
            document.getElementById(id).appendChild(category)
        }
    })

}
renderCards()   
