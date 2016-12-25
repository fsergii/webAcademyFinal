const baseUrl = "http://localhost:4001/api/v1/";

class PhonesModel {
    /** @ngInject */
    constructor($http, $window) {
        // this.data = ['asdasd', 'sadasdasd'];
        this.$window = $window;
        this.$http = $http;
        this._cart = localStorage.cart.split(',');
    }
    getItems() {
        return this.$http.get(baseUrl + "phones").then((response) => {
            return response.data;
        }, (e)=> {

        })
    }
    getOne(id) {
        return this.$http.get(baseUrl + "phones/" + id).then((response) => {
            return response.data;
        }, (e)=> {

        })
    }
    addToCart(id) {
        console.log(id)
        this._cart.splice(0,0,id);
        localStorage.setItem('cart', this._cart.join(','));
    }
    removeFromCart(id, ) {
        
        this._id = id;
        this._cart.splice(this._cart.indexOf(this._id),1);
        localStorage.setItem('cart', this._cart.join(','));
        this.$window.location.reload();;
    }
}

export default PhonesModel;