import { BASE_URL_API } from "./constants";

interface Options {
  headers: Record<string, string>;
  mode: RequestMode;
  cache: RequestCache;
}

export const post = async <K, T = unknown>(
  path: string,
  body: K,
  options?: Options
): Promise<T> => {
  const response = await fetch(`${BASE_URL_API}${path}`, {
    ...options,
    headers: {
      "Content-Type": options?.headers["Content-Type"] ?? "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const data: T = await response.json();

  return data;
};
