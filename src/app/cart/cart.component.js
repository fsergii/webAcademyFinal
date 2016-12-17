import "./cart.styles.css";

class CartController {
    /** @ngInject */
    constructor(phonesModel) {
        // console.log(phonesModel);
        // debugger;
        console.log("cart created!");
        // console.log($http);
        this.header = "Cart page";
        this._model = phonesModel;
        this._cart = localStorage.cart.split(',');
        this.phones = [];
        this._cart.forEach( (el) => {
            this._model.getOne(el).then( (item) => {
                // this._item = item;
                console.log(item)
                item.imgUrl = "http://localhost:4001/api/v1/" + item.images[0];
                this.phones.splice(0,0,item)
                
            })
            
        })
        // console.log(this.phones)
        
        // debugger;
        this.item = {};
        this.mainImage = null;
    }


}

const CartComponent = {
    template: `
    <div class = "cart__wrapper">
      
        <preview data="phone" ng-repeat="phone in $ctrl.phones"></preview>
    </div>    
    `,
    controller: CartController
};

export { CartComponent };