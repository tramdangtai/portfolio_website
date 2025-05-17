async function getData() {
        const res = await fetch("json/services.json");
        const data = await res.json();
        return data;
    };

async function main() {
        const serviceList = await getData();
        const serviceEl = document.querySelector(".services__container");
        for (const service of serviceList) {
            serviceEl.innerHTML+= 
            `<div class="services__box">
                <i class="fa-solid ${service.codeIconFontAwesome}"></i>
                <h3>${service.service}</h3>
                <p>${service.des}</p>
                <a href="${service.source}" class="btn">Read More</a>
            </div>`;
        }
    };

main()
