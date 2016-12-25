/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class PreviewController {
    /** @ngInject */
    constructor($stateParams, phonesModel) {
        this.header = "Phones";
        this.model = phonesModel;
    }
}

const PreviewComponent = {
    bindings: {
        "data": "="
    },
    template: `
    <div class = "card__wrapper">
      <a ui-sref="app.homeDetails({id: $ctrl.data._id})">
          <div class="card" id="{{$ctrl.data._id}}">
          <div class="ribbon"><span>{{$ctrl.data.price}}$</span></div>
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