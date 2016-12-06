/**
 * Created by IlyaLitvinov on 16.10.16.
 */
class Controller {
    /** @ngInject */
    constructor () {
    }
}

var SlideShow = () => {
    /** @ngInject */
    return {
        restrict: "E",
        bindToController: true,
        scope: {
            images: "="
        },
        link: (scope, el, attr, controller) => {
            // debugger;
            scope.$watch(()=>controller.images, (n) => {
                // debugger;
                if(n) {
                    scope.vm.mainImage = "http://localhost:4001/api/v1/"+n[0];

                    scope.$applyAsync();
                }
            });

        },
        controller: Controller,
        controllerAs: "vm",
        template: `
                <div class="details__main_image">
                    <img ng-src="{{::vm.mainImage}}" alt="">
                </div>
                <ul class="details__image_preview__wrapper">
                  <li class="details_image_preview" ng-repeat="image in vm.images">
                    <img src="{{'http://localhost:4001/api/v1/'+image}}" alt="">
                    </li>
                </ul>`
    }
};

export default SlideShow;