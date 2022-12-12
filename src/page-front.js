const frontPage = (() => {

    const innerObject = {
        init: function() {
            this.cacheDom();
            this.append();
        },
        cacheDom: function() {
            this.element = document.querySelector('#content');
        },
        // create: function() {
        //     this.div = document.createElement('div');
        // },
        create: function() {
            this.div = document.createElement('div');
            this.para = document.createElement('p');
        },
        append: function() {
            this.create();
            this.div.innerText = 'burgers';
            this.div.classList.add('love');
            this.element.appendChild(this.div);
            this.create();
            this.div.innerText = 'ho';
            this.div.classList.add('boink');
            this.element.appendChild(this.div);
            this.create();
            this.para.innerText = 'slut';
            this.element.appendChild(this.para);
        },
    };

    innerObject.init();
    
    return{innerObject};

})();

export default frontPage;
