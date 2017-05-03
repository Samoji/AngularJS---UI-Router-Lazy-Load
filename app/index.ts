import "angular";
import "angular-ui-router";

import * as angular from "angular";

import coreModule from "./core";
import feature1Module from "./feature1";

const appModule = angular.module("app", [
    coreModule,
    feature1Module
]).name;

angular
    .bootstrap(document.body, [ appModule ], { strictDi: true });