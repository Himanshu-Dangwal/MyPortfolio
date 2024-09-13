
let projects = [
  {
    "name": "Cloud Notebook",
    "desc": "Developed a cloud-based notebook application that enables users to access their notes conveniently from anywhere with an internet connection.",
    "category": "mern",
    "image": "cloudNotebook",
    "links": {
      "view": "https://cloud-book-frontend.vercel.app/about",
      "code": "https://github.com/Himanshu-Dangwal/cloud-book-frontend.git"
    }
  },
  {
    "name": "Card Game",
    "desc": "This project revolves around the concept of an Uno game, providing an opportunity for up to four players to connect simultaneously and partake in the enjoyable experience of playing.",
    "category": "mern",
    "image": "cardGame",
    "links": {
      "view": "https://card-game-frontend-two.vercel.app/",
      "code": "https://github.com/Himanshu-Dangwal/Card-Game-Backend"
    }
  },
  {
    "name": "Banking Application",
    "desc": "This project is about a complete banking application, mostly focused on backend created in Java SpringBoot.",
    "image": "bankingapplication",
    "category": "backend",
    "links": {
      "view": "https://github.com/Himanshu-Dangwal/BankingApplication",
      "code": "https://github.com/Himanshu-Dangwal/BankingApplication"
    }
  }
]

let projectsContainer = document.querySelector(".work .box-container");
let projectsHTML = "";
projects.forEach(project => {
  projectsHTML += `
        <div class="grid-item">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        <h1>${project.image}</h1>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
});
projectsContainer.innerHTML = projectsHTML;

