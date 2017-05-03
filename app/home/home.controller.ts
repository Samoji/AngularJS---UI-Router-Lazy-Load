export class HomeComponentController {
    private catImageSource: string;
    private welcomeText = "Welcome page!";

    constructor(){
        this.catImageSource = require("../assets/heavy_image_cat.jpg");
    }
}