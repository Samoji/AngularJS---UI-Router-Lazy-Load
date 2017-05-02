import "angular";
import "angular-ui-router";

import * as angular from "angular";
import uiRouterModule from "angular-ui-router";

import feature1Module from "./feature1";

const appModule = angular.module("app", [
    uiRouterModule,
    feature1Module
]).name;

angular
    .bootstrap(document.body, [
        appModule,
        uiRouterModule
    ], {
        strictDi: false
    });