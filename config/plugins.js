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
        defaultFrom: env('BREVO_SENDER'),       // make sure this is NOT your gmail
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






// module.exports = ({ env }) => ({
//         email: {
//     config: {
//       provider: 'nodemailer',
//       providerOptions: {
//         host: 'smtp-relay.brevo.com',
//         port: 587,
//         auth: {
//           user: '8ff451001@smtp-brevo.com',
//           pass: env('BREVO_SMTP_KEY'),
//         },
//       },
//       settings: {
//         defaultFrom: 'hossaintamzeed012@gmail.com',
//         defaultReplyTo: 'hossaintamzeed012@gmail.com',
//       },
//     },
//   },

//       upload: {
//         config: {
//           provider: 'cloudinary',
//           providerOptions: {
//             cloud_name: env('CLOUDINARY_NAME'),
//             api_key: env('CLOUDINARY_KEY'),
//             api_secret: env('CLOUDINARY_SECRET'),
//           },
//           actionOptions: {
//             upload: {},
//             uploadStream: {},
//             delete: {},
//           },
//         },
//       },
// })