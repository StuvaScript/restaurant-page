import frontPage from './page-front.js';
import './normalize.css';
import './style.css';
import shed from './pictures/pexels-stein-egil-liland-5740848.jpg';

// Import the other photos too?

function component() {
    // console.log(frontPage());
    return frontPage();
}

component();


// Make sure to change your devtool in webpack.config.js to something more 
// production friendly when you finish this project
