import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.111.3.2:9000/api",
});

export default apiClient;
