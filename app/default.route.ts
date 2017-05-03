import { UrlRouterProvider } from "@uirouter/angularjs/lib";

function configureDefaultRoute($urlRouterProvider: UrlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
}
configureDefaultRoute.$inject = ["$urlRouterProvider"];

export { configureDefaultRoute };