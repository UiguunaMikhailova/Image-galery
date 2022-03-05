const main = document.querySelector('.main');
const form = document.querySelector('form');
const search = document.querySelector('.input');

const apiKey = 'DCf0zX3Cz2HkXkUvV5dLPll5Am8q7Dtl7cnia8PPrUQ';

let urlDefault = `https://api.unsplash.com/search/photos?query=mountains&per_page=30&orientation=landscape&client_id=${apiKey}`;
let urlRequest = `https://api.unsplash.com/search/photos?per_page=30&orientation=landscape&client_id=${apiKey}&query=`;

getData(urlDefault);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUrl = `${urlRequest}${search.value}`;
    if (search.value) {
        getData(newUrl)
    }
});

async function getData(url) {
    main.innerHTML = '';
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach((element) => {
        showData(element);
    })
}

function createEl(tag, classOfTag) {
    let createElement = document.createElement(tag);
    createElement.classList.add(classOfTag);
    return createElement;
};

function showData(data) {
    
    const imageWrapper = createEl('div', 'image-wrapper');
    const image = createEl('img', 'image');

    image.src = `${data.urls.regular}`;
    image.alt = `${data.alt_description}`;

    imageWrapper.appendChild(image);
    main.appendChild(imageWrapper);
};

