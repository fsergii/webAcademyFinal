/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class MenuController {
    /** @ngInject */
    constructor($stateParams) {
        console.log("home created!");
        this.header = "Menu page";
    }
}

const MenuComponent = {
    bindings: {
        "data": "="
    },
    template: `
        <ul>
            <li ng-repeat="item in $ctrl.data track by $index">{{item}}</li>
        </ul>
    `,
    controller: MenuController

};

export { MenuComponent };