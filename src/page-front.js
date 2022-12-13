const frontPage = () => {

    const innerObject = {
        init: function() {
            this.cacheDom(); 
            this.createHeader();
        },
        cacheDom: function() {
            this.content = document.querySelector('#content');
        },
        domManipulate: function(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            (innerText !== '') ? newElement.innerText = innerText : '';
            (className !== '') ? newElement.classList.add(className) : '';
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes !== '') {
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

            this.header = this.domManipulate('header', '', 'header', '#content');
            this.headerH1 = this.domManipulate('h1', '', '', 'header');
            this.headerSpan1 = this.domManipulate('span', 'Abandoned', '', 'h1');
            this.headerBr = this.domManipulate('br', '', '', 'h1');
            this.headerSpan2 = this.domManipulate('span', 'Shed Café', '', 'h1');
            this.headerImg = this.domManipulate('img', '', 'shed-img', 'header', 'src', '../src/pictures/pexels-stein-egil-liland-5740848.jpg', 'alt', 'A rundown shed at night.');
        },
    };

    innerObject.init();
    
    return{innerObject};

};

export default frontPage;
