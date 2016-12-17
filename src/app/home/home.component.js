/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./home.styles.css";

class HomeController {
    /** @ngInject */
    constructor(phonesModel) {
        // console.log(phonesModel);
        // debugger;
        console.log("home created!");
        // console.log($http);
        this.header = "Home page";
        this._model = phonesModel;
        this._model.getItems().then((data) => {
            // debugger;
            this.phones = data.map((item) => {
                item.imgUrl = "http://localhost:4001/api/v1/" + item.imgUrl;
                // console.log(item)
                // debugger;
                return item;

            });
        })
    }
}

const HomeComponent = {
    template: `
    <div class = "home__wrapper">
        <preview data="phone" ng-repeat="phone in $ctrl.phones"></preview>
    </div>    
    `,
    controller: HomeController
};

export { HomeComponent };