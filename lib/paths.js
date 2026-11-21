export const BASE_PATH = "/magesh-photography";

export function assetPath(path) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
