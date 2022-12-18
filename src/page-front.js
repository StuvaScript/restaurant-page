export default function frontPage() {

    const innerObject = {
        init: function() {
            this.createHeader();
            this.createMain();
            this.createFooter();
        },
        manipulateDOM: function(element, innerText, className, appendTo, ...attributes) {
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
            this.header = this.manipulateDOM('header', '', '', '#content');
            this.H1 = this.manipulateDOM('h1', '', '', 'header');
            this.span = this.manipulateDOM('span', 'Abandoned', '', 'h1');
            this.br = this.manipulateDOM('br', '', '', 'h1');
            this.span = this.manipulateDOM('span', 'Shed Café', '', 'h1');
            this.img = this.manipulateDOM('img', '', 'shed-img', 'header', 'src', '../src/pictures/pexels-stein-egil-liland-5740848.jpg', 'alt', 'A rundown shed at night.');
        },
        createMain: function() {            
            this.main = this.manipulateDOM('main', '', '', '#content');
            this.div = this.manipulateDOM('div', '', 'sidebar', 'main');
            this.ul = this.manipulateDOM('ul', '', '', '.sidebar');
            this.li = this.manipulateDOM('li', 'Who We Are', '', 'ul');
            this.li = this.manipulateDOM('li', 'Our Creations', '', 'ul');
            this.li = this.manipulateDOM('li', 'Reserve A Table', '', 'ul');
            this.div = this.manipulateDOM('div', '', 'feature', 'main');
            this.img = this.manipulateDOM('img', '', 'interior-img', '.feature', 'src', '../src/pictures/pexels-arthouse-studio-4344544.jpg', 'alt', 'Interior of restaurant.');
            this.div = this.manipulateDOM('div', '', 'info', '.feature');
            this.div = this.manipulateDOM('div', '', 'para-div', '.info');
            this.p = this.manipulateDOM('p', this.longText.p1, '', '.para-div');
            this.br = this.manipulateDOM('br', '', '', '.para-div');
            this.p = this.manipulateDOM('p', this.longText.p2, '', '.para-div');
            this.img = this.manipulateDOM('img', '', 'eating-img', '.feature', 'src', '../src/pictures/pexels-helena-lopes-696218.jpg', 'alt', 'People eating.');
            this.img = this.manipulateDOM('img', '', 'cooking-img', '.feature', 'src', '../src/pictures/pexels-araz-yurtseven-13739759.jpg', 'alt', 'Cooking food over fire.');
            this.img = this.manipulateDOM('img', '', 'fish-img', '.feature', 'src', '../src/pictures/pexels-алекке-блажин-11244934.jpg', 'alt', 'Fish head food.');
            this.img = this.manipulateDOM('img', '', 'fire-img', 'main', 'src', '../src/pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg', 'alt', 'Chef cooking with fire.');
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
            this.a = this.manipulateDOM('a', 'Good Ware', '', '.fLi7', 'href', 'https://www.flaticon.com/free-icon/fish-bone_4201633?term=fish%20bones&page=1&position=1&page=1&position=1&related_id=4201633&origin=style', 'title', 'fish bone icons', 'target', '_blank');
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
        longText: {
            p1: 'Doggo ipsum borkf puggo noodle horse heckin good boys long water shoob, heckin good boys and girls very jealous pupper very taste wow. Pupper boof aqua doggo lotsa pats very good spot pupper much ruin diet very good spot boof super chub, such treat borkdrive blop the neighborhood pupper yapper wrinkler shooberino. Pats woofer smol borking doggo with a long snoot for pats wrinkler lotsa pats most angery pupper I have ever seen, ur givin me a spook.',
            p2: 'Bork h*ck heckin good boys and girls doing me a frighten doggorino adorable doggo, many pats aqua doggo doge pats clouds ruff, sub woofer lotsa pats very hand that feed shibe noodle horse. Fat boi wrinkler what a nice floof he made many woofs very taste wow, the neighborhood pupper long water shoob blop, noodle horse very taste wow very good spot. Blop you are doing me a frighten he made many woofs blep big ol tungg ruff very hand that feed.',
        },
    };

    innerObject.init();
    
    return {innerObject};

};
