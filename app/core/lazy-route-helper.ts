import { Transition } from "@uirouter/angularjs/lib";
import { LazyCompilerService } from "./lazy-compiler.service";
import { IComponentOptions } from "@types/angular";

export function registerComponentFromTransition(transition: Transition, componentName: string, componentOptions: IComponentOptions) {
    const lazyCompilerService = transition.injector().get<LazyCompilerService>("lazyCompilerService");
    if (lazyCompilerService == null) {
        throw new Error(`Unable to get lazyCompilerService from transition ${transition}`);
    }

    lazyCompilerService.registerComponent(componentName, componentOptions);
}