/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class AboutController {
    constructor(phonesModel) {
        console.log("About created!");
        this.header = "About page";
        this.menuItems = phonesModel.items;
        this._model = phonesModel;
    }

    addItem() {
        this._model.item = "From About";
        this.menuItems = this._model.items;
    }
}

const AboutComponent = {
    template: `
        <h1>{{$ctrl.header}}</h1>
        <menu data="$ctrl.menuItems"></menu>
        <div class="waves-effect waves-light btn" ng-click="$ctrl.addItem()">set Item to service</div>
    `,
    controller: AboutController
};

export { AboutComponent };