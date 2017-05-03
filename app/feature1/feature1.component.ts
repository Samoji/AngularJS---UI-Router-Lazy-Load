import { IComponentOptions } from "angular";

// import feature1Module, { addComponentLazy } from "./";
import * as angular from "angular";

const feature1ComponentOptions: IComponentOptions = {
    template: require("./feature1.html")
};

export { feature1ComponentOptions };

// addComponentLazy("featureOne", feature1ComponentOptions);