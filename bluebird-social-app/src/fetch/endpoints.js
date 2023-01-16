export const ENDPOINTS = {
  BASE: `https://dummyjson.com`,
  get POSTS() {
    return `${this.BASE}/posts`;
  },
  get USERS() {
    return `${this.BASE}/users`;
  },
};
