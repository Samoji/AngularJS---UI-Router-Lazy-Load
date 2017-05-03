import * as angular from "angular";
import { configRoute } from "./feature1.route";
import { ICompileProvider, IComponentOptions } from "angular";

// // TODO: extract to a service?
// let internalCompileProvider: ICompileProvider;

// function storeComponentProvider($compileProvider: ICompileProvider) {
//     internalCompileProvider = $compileProvider;
// }
// storeComponentProvider.$inject = ["$compileProvider"];

// export function addComponentLazy(name: string, options: IComponentOptions) {
//     internalCompileProvider.component(name, options);
// }

export default angular
    .module("app.feature1", [])
    .config(configRoute)
    //.config(storeComponentProvider)
    .name;