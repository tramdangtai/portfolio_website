async function getData() {
        const res = await fetch("json/projects.json");
        const data = await res.json();
        return data;
    };

async function main() {
        const projectList = await getData();
        const projectEl = document.querySelector(".portfolio__container");
        for (const project of projectList) {
            projectEl.innerHTML+= 
            `<div class="portfolio__box">
                <img src="${project.imgPath}" alt="${project.title}">
                <div class="portfolio__layer">
                    <h4>${project.title}</h4>
                    <p>${project.des}</p>
                    <a href="${project.source}"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>`;
        }
    };

main()
