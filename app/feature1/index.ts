import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";

import { configLazyRoute } from "./feature1.route";
import { ICompileProvider, IComponentOptions } from "angular";

export default angular
    .module("app.feature1", [
        uiRouter
    ])
    .config(configLazyRoute)
    .name;