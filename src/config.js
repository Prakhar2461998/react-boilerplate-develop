const local = {
  app: {
    REACT_APP_BASE_URL:"https://www.dummy.restapiexample.com/api/v1/",
  }
};

const dev = {
  app: {
    REACT_APP_BASE_URL:"https://www.dummy.restapiexample.com/api/v1/",
  },
};

const uat = {
  app: {
    REACT_APP_BASE_URL:"https://www.dummy.restapiexample.com/api/v1/",
  },
};

const prod = {
  app: {
    REACT_APP_BASE_URL:"https://www.dummy.restapiexample.com/api/v1/",
  },
};

console.log(process.env.REACT_APP_STAGE,    'REACT_APP_STAGE')
const config = process.env.REACT_APP_STAGE === 'production'  ? prod
             : process.env.REACT_APP_STAGE === 'development' ? dev
             : process.env.REACT_APP_STAGE === 'uat' ? uat
             : local;

export default {
  // Add common config values here
  ...config
};
