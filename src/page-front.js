const frontPage = () => {

    // const yonkers = {
    //     _init: function() {
    //         this._cacheDom();
    //         this._render();
    //     },
    //     _cacheDom: function() {
    //         this.newDiv = document.createElement('div');
    //     },
    //     _render: function() {
    //         this.newDiv.innerText = 'blumpkin';
    //     },
    // };

    // yonkers._init();



    const obj = {
        buns: function() {
            const yodiv = document.createElement('div');
            yodiv.innerText = 'burgers';
            document.querySelector('#content').appendChild(yodiv);
        },
    }
    // obj.buns();
    
    return {obj};
};

export default frontPage;


// Trying to call the object into the other page and append the elements on the index.js
// file. I don't fucking knowwwwwwww