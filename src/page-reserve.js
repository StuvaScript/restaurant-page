export default function pageReserve() {

    const innerObject = {
        init: function() {
            this.createMain();
            this.makeTodaysDate();
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
            this.div = this.manipulateDOM('div', '', 'reserve-feature', 'main');
            this.form = this.manipulateDOM('form', '', '', '.reserve-feature', 'action', ' ', 'method', 'post');
            this.div = this.manipulateDOM('div', '', 'name', 'form');
            this.label = this.manipulateDOM('label', '', '', '.name', 'for', 'name');
            this.input = this.manipulateDOM('input', '', '', '.name', 'type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Name *', 'aria-required', 'true', 'required', '');
            this.div = this.manipulateDOM('div', '', 'email', 'form');
            this.label = this.manipulateDOM('label', '', '', '.email', 'for', 'email');
            this.input = this.manipulateDOM('input', '', '', '.email', 'type', 'email', 'id', 'email', 'name', 'email', 'placeholder', 'Email *', 'aria-required', 'true', 'required', '');
            this.div = this.manipulateDOM('div', '', 'phone', 'form');
            this.label = this.manipulateDOM('label', '', '', '.phone', 'for', 'phone');
            this.input = this.manipulateDOM('input', '', '', '.phone', 'type', 'tel', 'id', 'phone', 'name', 'phone', 'placeholder', 'Phone *', 'aria-required', 'true', 'required', '');
            this.div = this.manipulateDOM('div', '', 'guests', 'form');
            this.div = this.manipulateDOM('div', '', 'g1', '.guests');
            this.label = this.manipulateDOM('label', 'Guests * (between 2 and 8)', '', '.g1', 'for', 'guests');
            this.div = this.manipulateDOM('div', '', 'g2', '.guests');
            this.input = this.manipulateDOM('input', '', '', '.g2', 'type', 'number', 'id', 'guests', 'name', 'guests', 'min', '2', 'max', '8', 'aria-required', 'true', 'required', '');
            this.div = this.manipulateDOM('div', '', 'date', 'form');
            this.div = this.manipulateDOM('div', '', 'd1', '.date');
            this.label = this.manipulateDOM('label', 'Date * ', '', '.d1', 'for', 'date');
            this.div = this.manipulateDOM('div', '', 'd2', '.date');
            this.input = this.manipulateDOM('input', '', '', '.d2', 'type', 'date', 'id', 'date', 'name', 'date', 'aria-required', 'true', 'required', '');
            this.div = this.manipulateDOM('div', '', 'time', 'form');
            this.div = this.manipulateDOM('div', '', 't1', '.time');
            this.label = this.manipulateDOM('label', 'Hours: Open 4pm. Close 11:30pm', '', '.t1', 'for', 'time');
            this.div = this.manipulateDOM('div', '', 't2', '.time');
            this.select = this.manipulateDOM('select', '', '', '.t2', 'name', 'time', 'id', 'time', 'aria-required', 'true', 'required', '');
            this.option = this.manipulateDOM('option', 'Time *', '', '#time', 'selected', '', 'disabled', '', 'value', ' ');
            this.option = this.manipulateDOM('option', '4:00', '', '#time', 'value', '4:00');
            this.option = this.manipulateDOM('option', '4:30', '', '#time', 'value', '4:30');
            this.option = this.manipulateDOM('option', '5:00', '', '#time', 'value', '5:00');
            this.option = this.manipulateDOM('option', '5:30', '', '#time', 'value', '5:30');
            this.option = this.manipulateDOM('option', '6:00', '', '#time', 'value', '6:00');
            this.option = this.manipulateDOM('option', '6:30', '', '#time', 'value', '6:30');
            this.option = this.manipulateDOM('option', '7:00', '', '#time', 'value', '7:00');
            this.option = this.manipulateDOM('option', '7:30', '', '#time', 'value', '7:30');
            this.option = this.manipulateDOM('option', '8:00', '', '#time', 'value', '8:00');
            this.option = this.manipulateDOM('option', '8:30', '', '#time', 'value', '8:30');
            this.option = this.manipulateDOM('option', '9:00', '', '#time', 'value', '9:00');
            this.option = this.manipulateDOM('option', '9:30', '', '#time', 'value', '9:30');
            this.option = this.manipulateDOM('option', '10:00', '', '#time', 'value', '10:00');
            this.option = this.manipulateDOM('option', '10:30', '', '#time', 'value', '10:30');
            this.div = this.manipulateDOM('div', '', 'message', 'form');
            this.label = this.manipulateDOM('label', '', '', '.message', 'for', 'message');
            this.textarea = this.manipulateDOM('textarea', '', '', '.message', 'name', 'message', 'id', 'message', 'placeholder', 'Message (optional)');
            this.button = this.manipulateDOM('button', 'Submit', '', 'form', 'disabled', '');      
        },
        makeTodaysDate: function() {
            const today = new Date().toISOString().split('T')[0];
            document.querySelector('[type="date"]').setAttribute('min', today);
        },
    };

    innerObject.init();
    
    return {innerObject};

};
