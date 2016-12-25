/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import './menu.styles.css'
class MenuController {
    /** @ngInject */
    constructor($stateParams) {
        this.header = "Store navbar";
        this.menuItems = ["Home", "About", "Cart"];
    }
}

const MenuComponent = {
    bindings: {
        "data": "="
    },
    template: `
    <div class = "menu__wrapper">
        <nav class="navbar navbar-light">
        <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <a ui-sref="app.home">Home</a>
                </li>
                <li class="nav-item">
                    <a ui-sref="app.about">About</a>
                </li>
                <li class="nav-item">
                    <a ui-sref="app.cart">Cart</a>
                </li>
            </ul>
        </div>
        </nav>
    </div>
    `,
    controller: MenuController

};

export { MenuComponent };