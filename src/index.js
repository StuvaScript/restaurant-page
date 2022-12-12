import frontPage from './page-front.js';
import './normalize.css';
import './style.css';
import shed from './pictures/pexels-stein-egil-liland-5740848.jpg';
// Import the other photos too?

function component() {
    console.log(frontPage.innerObject);
    return frontPage.innerObject;
}

document.querySelector('#content').appendChild(component());
