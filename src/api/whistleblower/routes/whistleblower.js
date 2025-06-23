'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/whistleblower/submit',
      handler: 'whistleblower.submit',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
