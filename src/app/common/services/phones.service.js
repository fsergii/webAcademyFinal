const baseUrl = "http://localhost:4001/api/v1/";

class PhonesModel {
    /** @ngInject */
    constructor($http) {
        this.data = ['asdasd', 'sadasdasd'];
        this.$http = $http;
        this._cart = localStorage.cart.split(',');
        // debugger;
    }

    getItems() {
        return this.$http.get(baseUrl + "phones").then((response) => {
            // debugger;
            return response.data;
        }, (e)=> {

        })
    }
    getOne(id) {
        return this.$http.get(baseUrl + "phones/" + id).then((response) => {
            // debugger;
            return response.data;
        }, (e)=> {

        })
    }

    addToCart (id) {
        console.log(id)
        // console.log(this.cart.splice(0,0,id).join(','));
        this._cart.splice(0,0,id);
        // console.log(this.tmp_cart)
        localStorage.setItem('cart', this._cart.join(','));
    }
}

export default PhonesModel;