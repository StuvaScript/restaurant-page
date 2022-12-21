import pageMain from './page-main.js';
import pageFront from './page-front.js';
import pageFood from './page-food.js';
import './normalize.css';
import './style.css';
import shed from './pictures/pexels-stein-egil-liland-5740848.jpg';

// Import the other photos too?

pageMain()

function component() {

    pageFront();

    function removeElements() {
        let picky = document.querySelectorAll('main > *:not(:first-child)');
        for (const el of picky) {
            el.remove();
        }
    };

    document.querySelector('.sidebar > ul').addEventListener('click', function(e) {
        const idx = [...this.children].indexOf(e.target);

        switch (idx) {
            case 0:
                removeElements();
                pageFront();
                break;
            case 1:
                removeElements();
                pageFood();
                break;
        }
    });
}

component();


// Make sure to change your devtool in webpack.config.js to something more 
// production friendly when you finish this project
