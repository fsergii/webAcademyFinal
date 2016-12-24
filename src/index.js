import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';
import {MenuComponent} from './app/components/menu.component';
import {PreviewComponent} from './app/home/preview.component';
import {DetailsComponent} from './app/details/details.component';
import {CartComponent} from './app/cart/cart.component';
import {CartElement} from './app/cart/cartElement.component';
import {TechSpecsComponent} from './app/details/techSpecs.component';
// import SlideShow from './app/details/slideShow.directive';
import PhonesModel from './app/common/services/phones.service';


// import MakeRedDirective from './app/home/directives/makeRed.directive';

angular
    .module('app', ['ui.router'])
    .config(routesConfig)
    .service("phonesModel", PhonesModel)
    // .directive("makeRed", MakeRedDirective)
    // .directive("slideShow", SlideShow)
    .component("app", AppComponent)
    .component("about", AboutComponent)
    .component("home", HomeComponent)
    .component("cart", CartComponent)
    .component("cartelement", CartElement)
    .component("preview", PreviewComponent)
    .component("phoneDetails", DetailsComponent)
    .component("techspecs", TechSpecsComponent)
    .component("menu", MenuComponent);


