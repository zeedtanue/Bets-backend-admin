'use strict';

/**
 * our-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::our-client.our-client');
