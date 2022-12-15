export default function frontPage() {

    const innerObject = {
        init: function() {

            // Do I even need to cache the DOM here??
            // this.cacheDom(); 

            this.createHeader();
        },
        cacheDom: function() {
            // Do I even need this??
            // this.content = document.querySelector('#content');
        },
        domManipulate: function(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            (innerText !== '') ? newElement.innerText = innerText : '';
            (className !== '') ? newElement.classList.add(className) : '';
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes.length !== 0) {
                let sets = attributes.length / 2;
                let attPosition = 0;
                let valPosition = 1;
                for (let i = 0; i < sets; i++) {
                    newElement.setAttribute(`${attributes[attPosition]}`, `${attributes[valPosition]}`)
                    attPosition += 2;
                    valPosition += 2;
                }
            };
        },
        createHeader: function() {
            
            // element, innerText, className, appendTo, ...attributes

            this.header = this.domManipulate('header', '', '', '#content');
            this.headerH1 = this.domManipulate('h1', '', '', 'header');
            this.headerSpan1 = this.domManipulate('span', 'Abandoned', '', 'h1');
            this.headerBr = this.domManipulate('br', '', '', 'h1');
            this.headerSpan2 = this.domManipulate('span', 'Shed Café', '', 'h1');
            this.headerImg = this.domManipulate('img', '', 'shed-img', 'header', 'src', '../src/pictures/pexels-stein-egil-liland-5740848.jpg', 'alt', 'A rundown shed at night.');
        },
    };

    innerObject.init();
    
    return {innerObject};

};
