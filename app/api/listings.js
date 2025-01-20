import { uploadProgress } from "../components/uploadProgress";
import Client from "./Client";
const endpoint = "./listings";
const getListings = () => {
  Client.get(endpoint);
};

const submitListings = async (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("description", listing.description);
  data.append("categoryId", listing.category.value);
  data.append("price", listing.price);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "images" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  data.append("images", {
    name: "",
    type: "",
    uri: "",
  });
  if (listing.location) data.append("location", JSON.stringify(location));

  Client.post(endpoint, data);
};
export default {
  getListings,
  submitListings,
};
