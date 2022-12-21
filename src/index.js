import pageFront from './page-front.js';
import pageFood from './page-food.js';
import pageMain from './page-main.js';
import './normalize.css';
import './style.css';
import shed from './pictures/pexels-stein-egil-liland-5740848.jpg';

// Import the other photos too?

pageMain()

function component() {

    // In the middle of having pageMain() always show but with the createMain() function gone. Then import createMain() from the
    // other pages as an event listener


    return pageFront();

}

component();


// Make sure to change your devtool in webpack.config.js to something more 
// production friendly when you finish this project
