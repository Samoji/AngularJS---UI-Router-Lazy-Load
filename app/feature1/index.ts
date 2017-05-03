import * as angular from "angular";

import coreModule from "../core";

import { configLazyRoute } from "./feature1.route";
import { ICompileProvider, IComponentOptions } from "angular";

export default angular
    .module("app.feature1", [
        coreModule
    ])
    .config(configLazyRoute)
    .name;