import { uploadInstance } from "./axios";

export const uploadMonster = async (body: any) =>
  await uploadInstance.post("/upload", body);


