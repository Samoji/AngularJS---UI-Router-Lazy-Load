import { StateDeclaration, StateProvider } from "angular-ui-router/lib";

function configRoute($stateProvider: StateProvider) {
    $stateProvider.state({
        lazyLoad: (transition, state) => {
            return System.import("./feature1.component");
        },
        url: "/feature1",
        name: "feature1",
        component:"featureOne"
    });
}
configRoute.$inject = ["$stateProvider"];

export { configRoute };