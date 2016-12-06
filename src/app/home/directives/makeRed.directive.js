/**
 * Created by IlyaLitvinov on 16.10.16.
 */
class Controller {
    /** @ngInject */
    constructor () {
        this.test = ["Hello", 1];
    }
}

var MakeRedDirective = () => {
    /** @ngInject */
  return {
      restrict: "A",
      bindToController: true,
      scope: true,
      link: (scope, el, attr, controller) => {
          // debugger;
      },
      controller: Controller,
      controllerAs: "vm"
  }
};

export default MakeRedDirective;