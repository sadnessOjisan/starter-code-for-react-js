import ENV from "./ENV";

let HOST_URL;

export let ROOT;
export let REDIRECT_URI;

const currentEnv = process.env.REACT_APP_ENV;

if (currentEnv === ENV.prd) {
  HOST_URL = "https://sample.com";
} else if (currentEnv === ENV.stg) {
  HOST_URL = "https://stg.sample.com";
} else if (currentEnv === ENV.dev) {
  HOST_URL = "https://dev.sample.com";
} else if (currentEnv === ENV.local) {
  HOST_URL = "http://localhost:3001";
} else {
  HOST_URL = "http://localhost:3001";
}

export default HOST_URL;
