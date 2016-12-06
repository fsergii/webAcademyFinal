/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./app.styles.css";
class AppComonentController {
    constructor() {
        console.log("App created!");
    }
}

const AppComponent = {
    template: `
        <div class="page_wrapper" >
            <div class = "menu_wrapper">
                <a ui-sref="app.home" class="menu">Home</a>
                <a ui-sref="app.about" class="menu">About</a>
                <a ui-sref="app.cart" class="menu">Cart</a>
            </div>
            <ui-view></ui-view>
        </div>
    `,
    controller: AppComonentController
};

export { AppComponent };