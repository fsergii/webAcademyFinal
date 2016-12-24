/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./details.styles.css";
class DetailsController {
    /** @ngInject */
    constructor(phonesModel, $stateParams) {
        
        console.log($stateParams.id);
        this._model = phonesModel;
        this._model.getOne($stateParams.id).then((data)=> {
            this.item = data;
             // console.log(this.item.hardware)
             // debugger;
            this.mainImage = "http://localhost:4001/api/v1/" + data.images[0];
        });
        // debugger;
        this.item = {};
        this.mainImage = null;
        this._id = $stateParams.id;
        this._cart = localStorage.cart.split(',');
 
    }
    showFull (uri) {
        this.mainImage = "http://localhost:4001/api/v1/" + uri;
    }
    // addToCart (id) {
    //     // console.log(this.cart.splice(0,0,id).join(','));
    //     this._cart.splice(0,0,this._id);
    //     // console.log(this.tmp_cart)
    //     localStorage.setItem('cart', this._cart.join(','));
    // }
}

const DetailsComponent = {
    template: `
       <div class="details__wrapper">
            <div class="details__all_images">
                <div class="details__small_image" ng-repeat="image in $ctrl.item.images">
                    <img ng-src="{{'http://localhost:4001/api/v1/'+image}}" ng-click="$ctrl.showFull(image)">
                </div>
            </div>
            <div class="details__main_image">
                <img ng-src="{{$ctrl.mainImage}}">
            </div>
            <div class="details__text">
                <techspecs data="$ctrl.item"></techspecs>
            </div>

            <div class="details__add_to_cart" ng-click="$ctrl._model.addToCart($ctrl._id)">
                Add to cart
            </div>  
        </div>
        
    `,
    controller: DetailsController
};

export { DetailsComponent };