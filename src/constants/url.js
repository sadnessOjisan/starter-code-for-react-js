import env from "./env";

let HOST_URL;

export let ROOT;
export let REDIRECT_URI;

const currentEnv = process.env.REACT_APP_ENV;

if (currentEnv === env.prd) {
  HOST_URL = "https://sample.com";
} else if (currentEnv === env.stg) {
  HOST_URL = "https://stg.sample.com";
} else if (currentEnv === env.dev) {
  HOST_URL = "https://dev.sample.com";
} else if (currentEnv === env.local) {
  HOST_URL = "http://localhost:3001";
} else {
  HOST_URL = "http://localhost:3001";
}

export default HOST_URL;
