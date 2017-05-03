import * as angular from "angular";

import { IComponentOptions } from "angular";
import { Feature1ComponentController } from "./feature1.controller";

const feature1ComponentOptions: IComponentOptions = {
    template: require("./feature1.html"),
    controller: Feature1ComponentController
};

export { feature1ComponentOptions };