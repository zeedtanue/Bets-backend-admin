module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
          user: env('BREVO_EMAIL'),
          pass: env('BREVO_SMTP_KEY'),
        },
      },
      settings: {
        defaultFrom: env('BREVO_SENDER'), // e.g. 'no-reply@yourdomain.com'
        defaultReplyTo: env('BREVO_SENDER'),
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
