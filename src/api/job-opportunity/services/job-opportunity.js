'use strict';

/**
 * job-opportunity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-opportunity.job-opportunity');
