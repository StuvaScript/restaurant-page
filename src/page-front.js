const frontPage = (() => {

    const innerObject = {
        init: function() {
            // this.cacheDom(); <-- This is whats making the code automatically compile
            // on the index.js file
            this.header();
        },
        cacheDom: function() {
            this.content = document.querySelector('#content');
        },

        // Still working on this factory function
        // -----------------------------------------------
        domManipulate: function(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            if (innerText !== '') {
                newElement.innerText = innerText;
            }
            if (className !== '') {
                newElement.classList.add(className);
            }
            document.querySelector(appendTo).appendChild(newElement);
            
            // Still working on making the attributes set themselves with the
            // rest parameter from the parameters above to the code below

            // if (attributes !== '') {
            //     let att = 0;
            //     let attVal = 1;
            //     console.log('att');

            //     console.log(attributes.length + ' attribute length');
            //     for (let i = 0; i < attributes.length / 2; i++) {
            //         console.log(i);
            //     newElement.setAttribute(`${attributes[att]}`, `${attributes[attVal]}`);

            //         }
            //     }
               
            // }

            //--------------------------------------------------------
        },
        header: function() {
            // Uncomment this code below once you get the import functionality
            // working

            // this.domManipulate('p', 'Hello bitches!', 'theClass','#content', 'love', 'buttz', 'ass', 'sucky');

            this.headerElement = document.createElement('header');
            // this.content.appendChild(this.headerElement); <--- Part of the
            // rendering issue I mentioned above and on index.js

            this.h1 = document.createElement('h1');
            this.headerElement.appendChild(this.h1);
            this.span1 = document.createElement('span');
            this.span1.innerText = 'Abandoned';
            this.h1.appendChild(this.span1);
            this.br = document.createElement('br');
            this.h1.appendChild(this.br);
            this.span2 = document.createElement('span');
            this.span2.innerText = 'Shed Café';
            this.h1.appendChild(this.span2);
            this.img = document.createElement('img');
            this.img.setAttribute('class', 'shed-img');
            this.img.setAttribute('src', '../src/pictures/pexels-stein-egil-liland-5740848.jpg');
            this.img.setAttribute('alt', 'A rundown shed at night.');
            this.headerElement.appendChild(this.img);
        },
    };

    innerObject.init();
    
    return{innerObject};

})();

export default frontPage;
