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
        <div class="page__wrapper">
            <menu></menu>
            <ui-view></ui-view>
        </div>
    `,
    controller: AppComonentController
};

export { AppComponent };