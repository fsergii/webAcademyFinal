import "./cart.styles.css";

class CartElementController {
    /** @ngInject */
    constructor($stateParams, phonesModel) {
        this.header = "Phones";
        this.model = phonesModel;
    }



}

const CartElement = {
    bindings: {
        "data": "="
    },
    template: `
            <div class="cart__main_image">
                <img ng-src="{{$ctrl.data.imgUrl}}">
            </div>

            <div class="cart__text">            
                {{$ctrl.data.name}}
            </div>

            <div class="cart__remove_from_cart" ng-click="$ctrl.model.removeFromCart($ctrl.data._id)">
                <div class="btn btn-primary">Remove from cart</div>
            </div>
        
    `,
    controller: CartElementController

};

export { CartElement };