/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class PreviewController {
    /** @ngInject */
    constructor($stateParams, phonesModel) {
        // console.log("home created!");s
        this.header = "Phones";
        this.model = phonesModel;
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

const PreviewComponent = {
    bindings: {
        "data": "="
    },
    template: `
    <div class = "card__wrapper">
      <a ui-sref="app.homeDetails({id: $ctrl.data._id})">
          
            <div class="card" id="{{$ctrl.data._id}}">
              <img class="card-img-top" ng-src="{{$ctrl.data.imgUrl}}">
              <div class="card-block">
                <h4 class="card-title">{{$ctrl.data.name}}</h4>
                <p class="card-text">{{$ctrl.data.description}}</p>
                <a href class="btn btn-primary" ng-click="$ctrl.model.addToCart($ctrl.data._id)">Add to cart</a>
              </div>
            </div>
          
      </a>
      </div>
    `,
    controller: PreviewController

};

export { PreviewComponent };