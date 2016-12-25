/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./details.styles.css";
class DetailsController {
    /** @ngInject */
    constructor(phonesModel, $stateParams) {
        this._model = phonesModel;
        this._model.getOne($stateParams.id).then((data)=> {
            this.item = data;
            this.mainImage = "http://localhost:4001/api/v1/" + data.images[0];
        });
        this.item = {};
        this.mainImage = null;
        this._id = $stateParams.id;
        this._cart = localStorage.cart.split(',');
 
    }
    showFull (uri) {
        this.mainImage = "http://localhost:4001/api/v1/" + uri;
    }
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

            <div class="details__add_to_cart btn btn-primary" ng-click="$ctrl._model.addToCart($ctrl._id)">
                Add to cart
            </div>  
        </div>
        
    `,
    controller: DetailsController
};

export { DetailsComponent };