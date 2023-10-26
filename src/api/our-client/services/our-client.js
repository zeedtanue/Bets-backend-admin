'use strict';

/**
 * our-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-client.our-client');
