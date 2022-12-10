const frontPage = (() => {

    // const page = {
    //     _init: function() {
    //         this._cacheDom();
    //         this._render();
    //     },
    //     _cacheDom: function() {
    //         this.div = document.createElement('div');
    //     },
    //     _render: function() {
    //         this.div.innerText = 'love';
    //     },
    // };

    // page._init();

    // const page = 'love';

    // const page = document.createElement('div');
    // page.innerText = 'love';

    const page = function() {
        const div = document.createElement('div');
        div.innerText = 'love';
        return div
    };
    console.log(page);

    return {page};
})();

export default frontPage;