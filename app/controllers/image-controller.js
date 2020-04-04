import ImageService from "../services/image-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImg() {
  let img = store.State.img.toString()
  document.getElementById("bg-image").style.backgroundImage = "url(" + img + ")"
}

export default class ImageController {
  constructor() {
    store.subscribe("img", _drawImg)
    ImageService.getImg();
  }


}