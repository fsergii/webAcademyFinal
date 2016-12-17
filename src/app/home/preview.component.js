/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class PreviewController {
    /** @ngInject */
    constructor($stateParams) {
        // console.log("home created!");s
        this.header = "Phones";
        // debugger;
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
              <img class="card-img-top" ng-src="{{$ctrl.data.imgUrl}}">
              <div class="card-block">
                <h4 class="card-title">{{$ctrl.data.name}}</h4>
                <p class="card-text">{{$ctrl.data.description}}</p>
                
              </div>
            </div>
          
      </a>
      </div>
    `,
    controller: PreviewController

};

export { PreviewComponent };