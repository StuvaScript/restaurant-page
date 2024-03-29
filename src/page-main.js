import shedImg from './pictures/pexels-stein-egil-liland-5740848.jpg';

export default function pageMain() {

    const innerObject = {
        init: function() {
            this.createHeader();
            this.createMain();
            this.createFooter();
        },
        manipulateDOM: function(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            (innerText !== '') ? newElement.innerText = innerText : '';
            if (className !== '') {
                const classArray = className.split(' ');
                switch (classArray.length) {
                    case 1:
                        newElement.classList.add(classArray[0]);
                        break;
                    case 2:
                        newElement.classList.add(classArray[0], classArray[1]);
                        break;
                    case 3:
                        newElement.classList.add(classArray[0], classArray[1], classArray[2]);
                        break;
                    case 4:
                        newElement.classList.add(classArray[0], classArray[1], classArray[2], classArray[3]);
                        break;
                }
            }
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
            this.header = this.manipulateDOM('header', '', '', '#content');
            this.H1 = this.manipulateDOM('h1', '', '', 'header');
            this.span = this.manipulateDOM('span', 'Abandoned', '', 'h1');
            this.br = this.manipulateDOM('br', '', '', 'h1');
            this.span = this.manipulateDOM('span', 'Shed Café', '', 'h1');
            this.img = this.manipulateDOM('img', '', 'shed-img', 'header', 'src', shedImg, 'alt', 'A rundown shed at night.');
        },
        createMain: function() {            
            this.main = this.manipulateDOM('main', '', '', '#content');
            this.div = this.manipulateDOM('div', '', 'sidebar', 'main');
            this.ul = this.manipulateDOM('ul', '', '', '.sidebar');
            this.li = this.manipulateDOM('li', 'Who We Are', '', 'ul');
            this.li = this.manipulateDOM('li', 'Our Creations', '', 'ul');
            this.li = this.manipulateDOM('li', 'Reserve A Table', '', 'ul');
        },
        createFooter: function() {
            this.footer = this.manipulateDOM('footer', '', '', '#content');
            this.p = this.manipulateDOM('p', 'Credits', '', 'footer');
            this.ul = this.manipulateDOM('ul', '', 'foot-list', 'footer');
            this.li = this.manipulateDOM('li', '', 'fLi1', '.foot-list');
            this.a = this.manipulateDOM('a', 'stein egil liland', '', '.fLi1', 'href', 'https://www.pexels.com/photo/abandoned-wooden-barn-on-grassy-terrain-against-starry-night-sky-5740848/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi2', '.foot-list');
            this.a = this.manipulateDOM('a', 'ArtHouse Studio', '', '.fLi2', 'href', 'https://www.pexels.com/photo/wooden-interior-of-modern-restaurant-in-marine-style-4344544/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi3', '.foot-list');
            this.a = this.manipulateDOM('a', 'Araz Yurtseven', '', '.fLi3', 'href', 'https://www.pexels.com/photo/a-person-cooking-in-a-pan-outdoors-13739759/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi4', '.foot-list');
            this.a = this.manipulateDOM('a', 'Helena Lopes', '', '.fLi4', 'href', 'https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi5', '.foot-list');
            this.a = this.manipulateDOM('a', 'Алекке Блажин', '', '.fLi5', 'href', 'https://www.pexels.com/photo/close-up-photograph-of-fish-heads-near-tomatoes-11244934/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi6', '.foot-list');
            this.a = this.manipulateDOM('a', 'Johnathan Macedo', '', '.fLi6', 'href', 'https://unsplash.com/photos/4NQEvxW2_4w', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi7', '.foot-list');
            this.a = this.manipulateDOM('a', 'Good Ware', '', '.fLi7', 'href', 'https://www.flaticon.com/free-icon/fish-bone_4201633?term=fish%20bones&page=1&position=1&page=1&position=1&related_id=4201633&origin=style', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi8', '.foot-list');
            this.a = this.manipulateDOM('a', 'Doggo Ipsum', '', '.fLi8', 'href', 'https://doggoipsum.com/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi9', '.foot-list');
            this.a = this.manipulateDOM('a', 'Parnis Azimi', '', '.fLi9', 'href', 'https://unsplash.com/photos/dIbPZcftpL8', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi10', '.foot-list');
            this.a = this.manipulateDOM('a', 'ducken99', '', '.fLi10', 'href', 'https://pixabay.com/photos/fried-rice-thai-food-thai-cuisine-3023040/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi11', '.foot-list');
            this.a = this.manipulateDOM('a', 'ROMAN ODINTSOV', '', '.fLi11', 'href', 'https://www.pexels.com/photo/delicious-appetizer-with-boiled-lobster-and-wine-4553378/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi12', '.foot-list');
            this.a = this.manipulateDOM('a', 'kkolosov', '', '.fLi12', 'href', 'https://pixabay.com/photos/top-view-basil-herbs-bowl-closeup-1248955/', 'target', '_blank');
            this.li = this.manipulateDOM('li', '', 'fLi13', '.foot-list');
            this.a = this.manipulateDOM('a', 'Jordane Mathieu', '', '.fLi13', 'href', 'https://unsplash.com/photos/q8-yKQ3P7J0', 'target', '_blank');
        },
    };

    innerObject.init();
    
    return {innerObject};

};
