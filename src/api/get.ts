import { BASE_URL_API } from "./constants";

export const get = async <T = unknown>(
  path: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${BASE_URL_API}${path}`, options);
  const data: T = await response.json();

  return data;
};
