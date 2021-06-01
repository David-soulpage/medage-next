// Base URLS
export const BASE_PROD = "";
export const BASE_STAGING = "";
export const BASE_LOCAL = "";

// authentication routes
export const AUTH_LOGIN = `/api/signin/`;
export const AUTH_SIGNUP = `/api/signup/`;

// onboard routes
export const ONBOARD = `/api/users/`;
export const ONBOARD_WITH_ID = (user_id: any) => `/api/users/${user_id}/`;
