import frontPage from './page-front.js';
import './normalize.css';
import './style.css';
import shed from './pictures/pexels-stein-egil-liland-5740848.jpg';
// Import the other photos too?

function component() {
    console.log(frontPage.innerObject);
    return frontPage.innerObject;
}

// The code below is throwing the error. I'm trying to make it so that I can
// import front-page.js without it automatically compiling on the page.

// Comment out the code below to see the error disappear
document.querySelector('#content').appendChild(component());
