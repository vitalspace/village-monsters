import axios, { Axios, type AxiosInstance } from "axios";

const CLOUDINARY_CLOUD_NAME = "vitalspace";

const uploadInstance: AxiosInstance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image`,
});

const transFormInstance: AxiosInstance = axios.create({
  baseURL: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`,
});

export { uploadInstance, transFormInstance };
