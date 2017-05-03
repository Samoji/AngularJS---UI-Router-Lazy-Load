import * as angular from "angular";
import { LazyCompilerService } from "./lazy-compiler.service";
import { ICompileProvider, IComponentController } from "angular";

export default angular
    .module("app.core", [])
    .service("lazyCompilerService", LazyCompilerService)
    .config(["$provide", "$compileProvider", ($provide: any, $compileProvider: ICompileProvider) => {
        $provide.constant("$compileProvider", $compileProvider);
    }])
    .name;