import * as angular from "angular";
import { configLazyRoute } from "./home.route";

import coreModule from "../core";

export default angular
    .module("app.home", [
        coreModule
    ])
    .config(configLazyRoute)
    .name;