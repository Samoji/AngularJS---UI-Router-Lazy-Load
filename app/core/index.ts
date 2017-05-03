import * as angular from "angular";
import uiRotureModule from "@uirouter/angularjs";

import { LazyCompilerService } from "./lazy-compiler.service";
import { ICompileProvider, IComponentController } from "angular";

export default angular
    .module("app.core", [
        uiRotureModule
    ])
    .service("lazyCompilerService", LazyCompilerService)
    .config(["$provide", "$compileProvider", ($provide: any, $compileProvider: ICompileProvider) => {
        $provide.constant("$compileProvider", $compileProvider);
    }])
    .name;