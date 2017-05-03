import "angular";
import "angular-ui-router";

import * as angular from "angular";

import coreModule from "./core";
import homeModule from "./home";
import feature1Module from "./feature1";

import { UrlService, UrlRouter, UrlRouterProvider } from "@uirouter/angularjs/lib";
import { configureDefaultRoute } from "./default.route";

const appModule = angular.module("app", [
    coreModule,

    homeModule,
    feature1Module
])
    .config(configureDefaultRoute)
    .name;

angular
    .bootstrap(document.body, [appModule], { strictDi: true });