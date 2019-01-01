/* eslint-disable */
const config = require('./default');

let envConfig = {};
try {
  envConfig = require(`./${process.env.REACT_APP_VINYL_TRACKER_ENV}.json`);
} catch (e) {
  console.error(`error while loading config: ${e}`);
  envConfig = require('./dev.json');
}

console.log({ envConfig });

export default {
  ...config,
  ...envConfig,
};
/* eslint-enable */
