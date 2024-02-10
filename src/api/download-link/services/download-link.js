'use strict';

/**
 * download-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-link.download-link');
