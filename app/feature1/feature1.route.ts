import { IComponentOptions } from "@types/angular";
import { StateProvider } from "@uirouter/angularjs/lib";

import { LazyCompilerService } from "../core/lazy-compiler.service";
import { registerComponentFromTransition } from "../core/lazy-route-helper";

function configLazyRoute($stateProvider: StateProvider) {
    $stateProvider.state({
        lazyLoad: (transition, state) => {
            return System.import("./feature1.component").then((exported: { feature1ComponentOptions: IComponentOptions }) => {
                registerComponentFromTransition(transition, "featureOne", exported.feature1ComponentOptions);
                return exported;
            });
        },
        url: "/feature1",
        name: "feature1",
        component: "featureOne"
    });
}
configLazyRoute.$inject = ["$stateProvider"];

export { configLazyRoute };