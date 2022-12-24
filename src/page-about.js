export default function pageAbout() {

    const innerObject = {
        init: function() {
            this.createMain();
        },
        manipulateDOM: function(element, innerText, className, appendTo, ...attributes) {
            const newElement = document.createElement(element);
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
        createMain: function() {            
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
        longText: {
            p1: 'Doggo ipsum borkf puggo noodle horse heckin good boys long water shoob, heckin good boys and girls very jealous pupper very taste wow. Pupper boof aqua doggo lotsa pats very good spot pupper much ruin diet very good spot boof super chub, such treat borkdrive blop the neighborhood pupper yapper wrinkler shooberino. Pats woofer smol borking doggo with a long snoot for pats wrinkler lotsa pats most angery pupper I have ever seen, ur givin me a spook.',
            p2: 'Bork h*ck heckin good boys and girls doing me a frighten doggorino adorable doggo, many pats aqua doggo doge pats clouds ruff, sub woofer lotsa pats very hand that feed shibe noodle horse. Fat boi wrinkler what a nice floof he made many woofs very taste wow, the neighborhood pupper long water shoob blop, noodle horse very taste wow very good spot. Blop you are doing me a frighten he made many woofs blep big ol tungg ruff very hand that feed.',
        },
    };

    innerObject.init();
    
    return {innerObject};

};
