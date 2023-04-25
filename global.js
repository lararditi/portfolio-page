let totalProjectCount = 6
let projectContainer = document.getElementById('project-container')
let modal = document.getElementById('modal');
for (let projectCount = 0; projectCount < totalProjectCount; projectCount++) {
    let currentDiv = document.createElement('div');
    currentDiv.id = `project${projectCount}`;
    currentDiv.dataset.number = projectCount
    currentDiv.innerHTML = `<div class="core-1"> <img data-number="${projectCount}" src="${modalContentData[projectCount].icon}"> </div>`
    projectContainer.appendChild(currentDiv);
    currentDiv.addEventListener('click', function(event) {
        let selectedProject = event.target.getAttribute('data-number')
        renderModal(selectedProject)
        console.log(selectedProject)
    })
}

modal.addEventListener('click', function() {
        modal.style.display = 'none'
    
})

const modalContentData = [
    {
        title: "KOSHER NYC",
        description: "A hypothetical exhibition/food tour which uses New York city as its space which takes inspiration in its form from the grid maps apps are built on. ",
        img: ['onemap.jpg', 'frontback.jpg', 'two.jpg', 'three.jpg'],
        icon: 'koshericon.jpg'
    },
    {
        title: "HOME",
        description: "This booklet draws the relationship between the dimensions the word “home” is expressed in - the visual symbols we universally use to demonstrate “home”, the spaces we call “home” and what alternatives to what “home” can be to individuals. This is not only expressed through the content but also literally expressed through the use of a changing grid in the background of each section.",
        img: ['hero.jpg', 'blue.jpg']
    },
    {
        title: "ELEMENTS OF THE PERIODIC TABLE",
        description: "This poster emphasizes grid systems and typographic hierarchy not only to divide the page, but also by using units created by it to show the numerical value of atomic weights visually. By using the divisibility of the grid the design invites the viewer to zoom in and out and to think about how atoms build the objects we see.",
        img: ['table.jpg', 'bi.jpg']
    },
    {
        title: "FRUIT STICKERS",
        description: "This website's purpose is to explore using API keys and filter a collection of fruit sticker based on companies' ethics: url.",
        img: ['periodic-table.jpg']
    },

    {
        title: "TUNNEL",
        description: "This website is constructed to create a narrative by using multiple platforms.",
        img: ['./periodic-table.jpg']
    },
    {
        title: "NYC FOODSCRAP DROPOFF LOCATIONS",
        description: "This site showcases information from NYC Open Data and is made to learn the basics of JavaScript. The user can see the density of food scrap dropoff locations as it it is displayed by using a grayscale and can get more information on the adress through interaction.",
        img: ['hero.jpg', 'blue.jpg']
    },

]


function renderModal(projectNumber) {
    let clickedProject = modalContentData[projectNumber]
    modal.innerHTML = `
    <div class="about">${clickedProject.title}</div>
    <div class="info">${clickedProject.description}</div>
    
    `
    for (image of clickedProject.img) {
        let currentImage = `
        <img src="${image}">
        `
        modal.insertAdjacentHTML("beforeend", currentImage)
    }
    
    modal.style.display = 'block'
}

