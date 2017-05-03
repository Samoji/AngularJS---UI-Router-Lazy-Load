import { StateProvider } from "@uirouter/angularjs/lib";
import { registerComponentFromTransition } from "../core/lazy-route-helper";
import { IComponentOptions } from "@types/angular";

function configLazyRoute($stateProvider: StateProvider) {
    $stateProvider.state({
        lazyLoad: (transition, state) => {
            return System.import("./home.component").then((exported: { homeComponentOptions: IComponentOptions }) => {
                registerComponentFromTransition(transition, "home", exported.homeComponentOptions);
                return exported;
            });
        },
        url: "/home",
        name: "home",
        component: "home"
    });
}
configLazyRoute.$inject = ["$stateProvider"];

export { configLazyRoute };