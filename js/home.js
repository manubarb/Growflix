import {videos} from './data.js';

function returnObjectArray(objectArray){
    return objectArray.filter(video => {
        const validCategories = ["Growcast", "Flutter", "Jornada UX/UI", "Diversos"]; 
        return validCategories.includes(video.category);
    })
}

function createCards(objArray) {
    const card = objArray.map(obj => {
      const { img, link, category } = obj
      return `<div class="col ${category}">
                <img src="${img}" class="img-fluid">
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
        { name: "growcast", elementId: "growcast" },
        { name: "flutter", elementId: "flutter" },
        { name: "ux-ui", elementId: "ux-ui" },
        { name: "diversos", elementId: "diversos" }
    ]

    categories.forEach(({ name, elementId }) => {
        const categoryCards = cardsArray.filter(obj => obj.category === name)
        if (categoryCards.length > 0) {
            const categoryElement = createCards(categoryCards)
            document.getElementById(elementId).appendChild(categoryElement)
        }
    })

}

