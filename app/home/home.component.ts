import { IComponentOptions } from "@types/angular";
import { HomeComponentController } from "./home.controller";

const homeComponentOptions: IComponentOptions = {
    template: require("./home.html"),
    controller: HomeComponentController
};

export { homeComponentOptions };