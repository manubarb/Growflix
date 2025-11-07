import {videos} from './data.js';

// retorna array por categoria
function returnObjectArray(objectArray, category){
    return objectArray.filter(video => video.category === category)
}
//let resultArray = returnObjectArray(videos,)

// retorna o id do container
function returnContainerId(category){
     const containers = {
        growdev: "growdev",
        flutter: "flutter",
        uxui: "ux-ui",
        diversos: "diversos"
    };
    
    const containerId = containers[category];
    return document.getElementById(containerId);
}

// cria os cards de acordo com cada categoria de array 
function renderCards(objArray, container) {
    const container = container;
    container.innerHTML = ""

    // processa cada objeto para colocar no card
    const card = objArray.map(obj => {
      const { img, link } = obj
      return `
        <div class="row">
                <div class="col">
                    <img src="${img}" class="img-fluid">
                </div>
                <a href="${link}"></a>
        </div>
    `
    })

    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML = card
    container.appendChild(col)
}

//renderCards(objArray, containerId)

