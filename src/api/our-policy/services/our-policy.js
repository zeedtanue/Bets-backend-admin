'use strict';

/**
 * our-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-policy.our-policy');
