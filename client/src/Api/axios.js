import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  baseURL: "https://api-5ssez3yk2q-uc.a.run.app",

  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-pm1z.onrender.com",
});

export { axiosInstance };
