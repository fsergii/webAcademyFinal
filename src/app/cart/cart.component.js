import "./cart.styles.css";

class CartController {
    /** @ngInject */
    constructor(phonesModel) {
        // console.log("cart created!");
        this._model = phonesModel;
        this._cart = localStorage.cart.split(',');
        this._cart.pop();
        this.phones = [];
        this._cart.forEach( (el) => {
            this._model.getOne(el).then( (item) => {
                item.imgUrl = "http://localhost:4001/api/v1/" + item.images[0];
                this.phones.splice(0,0,item);
            })
        })
        this.item = {};
        this.mainImage = null;
    }
}

const CartComponent = {
    template: `
    <div class = "cart__wrapper">
        <div ng-if="$ctrl.phones.length < 1">В корзине ничего нет</div>
        <cartelement data="phone" ng-repeat="phone in $ctrl.phones"></cartelement>
    </div>    
    `,
    controller: CartController
};

export { CartComponent };