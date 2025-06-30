'use strict';

module.exports = {
  async submit(ctx) {
    const { email, message } = ctx.request.body;

    // Validate message field
    if (!message || message.length < 10 || message.length > 5000) {
      return ctx.badRequest('Message must be between 10 and 1000 characters.');
    }

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'compliance@betsbd.com',
        from: 'tamzeed73@gmail.com',
        subject: '🕵️ New Whistleblower Submission',
        text: `Message:\n${message}\n\nSender: ${email || 'Anonymous'}`,
      });

      return ctx.send({ success: true, message: 'Submission received.' });
    } catch (err) {
      console.error('Email send failed:', err);
      return ctx.internalServerError('Unable to send message.');
    }
  },
};
