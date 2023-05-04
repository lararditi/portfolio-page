

const modalContentData = [
    {
        title: "KOSHER NYC",
        description: "A hypothetical exhibition/food tour which uses New York city as its space which takes inspiration in its form from the grid maps apps are built on. ",
        img: ['onemap.jpg', 'frontback-3.png', 'twomap.jpg', 'threemap.jpg'],
        icon: ['kosher.png']
    },
    {
        title: "HOME",
        description: "This booklet draws the relationship between the dimensions the word “home” is expressed in - the visual symbols we universally use to demonstrate “home”, the spaces we call “home” and what alternatives to what “home” can be to individuals. This is not only expressed through the content but also literally expressed through the use of a changing grid in the background of each section.",
        img: ['h.png', 'home-1.png', 'home-2.png', 'home-3.png', 'home4.png'],
        icon: ['h.png']
    },
    {
        title: "ELEMENTS OF THE PERIODIC TABLE",
        description: "This poster emphasizes grid systems and typographic hierarchy not only to divide the page, but also by using units created by it to show the numerical value of atomic weights visually. By using the divisibility of the grid the design invites the viewer to zoom in and out and to think about how atoms build the objects we see.",
        img: ['table.jpg', 'bi.jpg'],
        icon: ['bi.jpg']
    },
    {
        title: "FRUIT STICKERS",
        description: "This website's purpose is to explore using API keys and filter a collection of fruit sticker based on companies' ethics. <br> Click on link for website: ",
        img: ['fruit.png'],
        icon: ['fruit.png']
    },

    {
        title: "TUNNEL",
        description: "This website is constructed to create a narrative by using multiple platforms. <br> Click on link for website: ",
        img: ['sketch-tunnel.png'],
        icon: ['sketch-tunnel.png']
    },
    {
        title: "NYC FOODSCRAP DROPOFF LOCATIONS",
        description: "This site showcases information from NYC Open Data and is made to learn the basics of JavaScript. The user can see the density of food scrap dropoff locations as it it is displayed by using a grayscale and can get more information on the adress through interaction. <br> Click on link for website: ",
        img: ['fooddrop.png'],
        icon: ['fooddrop.png']
    },

    {
        title: "VISUAL CONVERSATION",
        description: "https://lararditi.github.io/core2-lab-convo/",
        img: ['convo.png'],
        icon: ['convo.png']
    },

    {
        title: "FILM STRIP",
        description: "https://lararditi.github.io/core2-lab-filmstrip/",
        img: ['dorothy.png'],
        icon: ['dorothy.png']
    },

    {
        title: "MEDIA TUNNEL",
        description: "https://lararditi.github.io/bubblegum/",
        img: ['bubblegum.png'],
        icon: ['bubblegum.png']
    },
    
    {
        title: "JSON DATA",
        description: "https://lararditi.github.io/bubblegum/",
        img: ['json.png'],
        icon: ['json.png']
    },

    {
        title: "ARENA BLOCK",
        description: "https://lararditi.github.io/bubblegum/",
        img: ['arena.png'],
        icon: ['arena.png']
    }
]

let totalProjectCount = 11
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
        renderModal(modalContentData[selectedProject], Number(selectedProject))
        console.log(selectedProject)
    })
}

let closeButton = document.querySelector("#closeButton")

function renderModal(clickedProject, selectedProject) {
    console.log(clickedProject,selectedProject);
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

    let closeButton = document.createElement("h2");
    closeButton.innerHTML="X";
    closeButton.id = "closeButton";
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'
    })
    let buttonContainer = document.createElement("div");
    let next = document.createElement("button");
    let prev = document.createElement("button");
    buttonContainer.classList.add("btn-container");
    next.innerHTML = ">";
    prev.innerHTML = "<";
    next.addEventListener('click', ()=>{
        if(selectedProject+1>=modalContentData.length){
            renderModal(modalContentData[0], 0)
        }else{
            renderModal(modalContentData[selectedProject+1], selectedProject+1);
        }
    });

    prev.addEventListener('click', ()=>{
        if(selectedProject-1<0){
            renderModal(modalContentData[modalContentData.length-1], modalContentData.length-1)
        }else{
            renderModal(modalContentData[selectedProject-1], selectedProject-1);
        }
    });

    buttonContainer.append(prev, next);
    modal.append(closeButton, buttonContainer);
}




