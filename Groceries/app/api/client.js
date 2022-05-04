import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.201.1.91:9000/api",
});

export default apiClient;
