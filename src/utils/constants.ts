export const ENV = {
  API: process.env.API_URL,
};

export const INTERNAL_ENDPOINTS = {
  FARMER: {
    GET_LIST: "/api/farmer",
    GET: "/api/farmer?id=::id",
    CREATE: "/api/farmer/create",
    UPDATE: "/api/farmer/update",
    ANALYTICS: "/api/farmer/analytics",
  },
  STATE: {
    GET_LIST: "/api/state",
  },
  AUTH: {
    LOGIN: "/api/auth/sign-in",
    REGISTER: "/api/auth/sign-up",
    VERIFY: "/api/auth/verify",
  },
  CROP: {
    GET_LIST: "/api/crop",
  },
};

export const EXTERNAL_ENDPOINTS = {
  FARMER: {
    GET_LIST: `${ENV.API}/farmer/find`,
    GET: `${ENV.API}/farmer/find/::id`,
    CREATE: `${ENV.API}/farmer/create`,
    UPDATE: `${ENV.API}/farmer/update`,
    ANALYTICS: `${ENV.API}/farmer/analytics`,
  },
  STATE: {
    GET_LIST: `${ENV.API}/state`,
  },
  AUTH: {
    LOGIN: `${ENV.API}/auth/sign-in`,
    REGISTER: `${ENV.API}/auth/sign-up`,
    VERIFY: `${ENV.API}/auth/verify`,
  },
  CROP: {
    GET_LIST: `${ENV.API}/crop`,
  },
};

export const COOKIES = {
  TOKEN: "brain.auth_token",
  THEME: "brain.theme_style",
};

export const TW_CREDENTIALS = {
  SID: process.env.TW_SID,
  TOKEN: process.env.TW_TOKEN,
};
