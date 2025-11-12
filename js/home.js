import {videos} from './data.js';

function returnObjectArray(objectArray){
    return objectArray.filter(video => {
        const validCategories = ["Growdev", "Webinar em Flutter", "Jornada UX/UI", "Diversos"]; 
        return validCategories.includes(video.category);
    })
}

function createCards(objArray) {
    const card = objArray.map(obj => {
      const { img, title, link} = obj
      return `<div class="col">
                <img src="${img}" class="img-fluid">
                <p>${title}</p>
            </div>
            <a href="${link}"></a>`
    }).join('')

    const row = document.createElement("div")
    row.classList.add("row")
    row.innerHTML = card

    return row
}

function renderCards(){
    const cardsArray = returnObjectArray(videos)
    const categories = [
        { name: "Growdev", elementId: "growcast" },
        { name: "Webinar em Flutter", elementId: "flutter" },
        { name: "Jornada UX/UI", elementId: "ux-ui" },
        { name: "Diversos", elementId: "diversos" }
    ]

    categories.forEach(({ name, elementId }) => {
        const categoryCards = cardsArray.filter(obj => obj.category === name)
        if (categoryCards.length > 0) {
            const categoryElement = createCards(categoryCards)
            document.getElementById(elementId).appendChild(categoryElement)
        }
    })

}
 renderCards()