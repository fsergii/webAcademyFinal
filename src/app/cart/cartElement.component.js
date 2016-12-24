/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class CartElementController {
    /** @ngInject */
    constructor($stateParams, phonesModel) {
        // console.log("home created!");s
        this.header = "Phones";
        this.model = phonesModel;
        console.log(1);
        // debugger;
    }

    // showId (event) {
    //   console.log(event)
    //   console.log(event.target.parentNode.parentNode.id)
    // }

    // addToCart (event) {
    //     this.id = event.target.parentNode.parentNode.id
    //     // console.log(this.cart.splice(0,0,id).join(','));
    //     this._cart.splice(0,0,this._id);
    //     // console.log(this.tmp_cart)
    //     localStorage.setItem('cart', this._cart.join(','));
    // }
}

const CartElement = {
    bindings: {
        "data": "="
    },
    template: `
    <div class = "card__wrapper">
      
            
            <div class="details__main_image">
                <img ng-src="{{$ctrl.data.imgUrl}}">
            </div>
            <div class="details__text">
                <techspecs data="$ctrl.item"></techspecs>
            </div>

            <div class="details__add_to_cart" ng-click="$ctrl._model.addToCart($ctrl._id)">
                Add to cart
            </div>  
        
      </div>
    `,
    controller: CartElementController

};

export { CartElement };