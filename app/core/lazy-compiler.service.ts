import { IComponentOptions, ICompileProvider } from "@types/angular";
import { Transition } from "@uirouter/angularjs/lib";

export class LazyCompilerService {
    static $inject = ["$compileProvider"];
    constructor(private $compileProvider: ICompileProvider) { }
    registerComponent(name: string, options: IComponentOptions) {
        this.$compileProvider.component(name, options);
    }
}