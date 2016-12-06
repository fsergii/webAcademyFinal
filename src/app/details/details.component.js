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
             // console.log(this.item)
            this.mainImage = "http://localhost:4001/api/v1/" + data.images[0];
        });
        // debugger;
        this.item = {};
        this.mainImage = null;
        this._id = $stateParams.id;
        this._cart = localStorage.cart.split(',')
        // debugger;
        // console.log(this.cart)
        // this._name = this.item.name;

        // debugger;
    }
    showFull (uri) {
        this.mainImage = "http://localhost:4001/api/v1/" + uri;
    }
    addToCart (id) {
        // console.log(this.cart.splice(0,0,id).join(','));
        this._cart.splice(0,0,this._id);
        // console.log(this.tmp_cart)
        localStorage.setItem('cart', this._cart.join(','));
    }
}

const DetailsComponent = {
    template: `
       <div class="details__wrapper">
            <div class="col m4 s4 l4">
                <slide-show images="$ctrl.item.images"></slide-show>
            </div>
        </div>
        <div ng-click="$ctrl.addToCart($ctrl._id)">
            Add to cart
        </div>  
    `,
    controller: DetailsController
};

export { DetailsComponent };