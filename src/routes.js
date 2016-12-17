export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/app/phones');

    $stateProvider
        .state('app', {
            url: '/app',
            component: 'app'
        })
        .state('app.home', {
            url: '/phones',
            component: 'home'
        })
        .state('app.homeDetails', {
            url: '/phones/:id',
            component: 'phoneDetails'
        })
        .state('app.cart', {
            url: '/cart',
            component: 'cart'
        })
        .state('app.about', {
            url: '/about',
            component: 'about'
        });
}
