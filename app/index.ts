import "angular";
import "angular-ui-router";

import * as angular from "angular";
import uiRouterModule from "@uirouter/angularjs/lib";

import coreModule from "./core";
import feature1Module from "./feature1";

const appModule = angular.module("app", [
    uiRouterModule,
    coreModule,
    feature1Module
]).name;

angular
    .bootstrap(document.body, [
        appModule,
        uiRouterModule
    ], {
        strictDi: false
    });