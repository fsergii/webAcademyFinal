var AddToCartDirective = () => {
    /** @ngInject */
  return {
      restrict: "A",
      bindToController: true,
      scope: true,
      link: (scope, el, attr, controller) => {
          // debugger;
      },
      console.log(el.id)
  }
};

export default AddToCartDirective;