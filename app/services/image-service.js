import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImg() {
    imgApi.get()
      .then(res => {
        console.log("getImg data", res.data);
        let imgURL = res.data.large_url || res.data.url
        store.commit("img", imgURL)

      })
      .catch(err => console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;
