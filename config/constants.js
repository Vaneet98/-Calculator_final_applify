const globalConstants = {
  DEFAULTS: {
    PAGE_LIMIT: 10,
  },
  APP_NAME: "",
  APP_URLS: {
    LOCAL: {
      API_URL: "http://localhost:3003",
      API_ASSERT_URL: "http://localhost:3003/public/",
      ADMIN_URL: "http://localhost:4200",
      FORGET_URL: "http://localhost:3001/reset",
      DOMAIN: "localhost:3000",
      WEB_URL: "",
      PRIVATE_KEY: "%#Qr0Y%$KA1&$$@PLP1c@t20L",
      PRIVATE_KEY_ADMIN: "%#ABCD%$KA1&$$@PBA1c@t20L",
      TOKEN_EXPIRY: "1 * 30 * 1000 * 60 * 24",
      SETTING_URL: {
        privacy: "",
        terms: "",
      },
    },
    DEV: {
      API_URL: "https://api-lib.applifyapps.com",
      API_ASSERT_URL: "http://localhost:3000/public/",
      ADMIN_URL: "https://admin-lib.applifyapps.com",
      DOMAIN: "api-lib.applifyapps.com",
      WEB_URL: "https://web-lib.applifyapps.com",
      PRIVATE_KEY: "%#Qr0Y%$KA1&$$@PLP1c@t20L",
      PRIVATE_KEY_ADMIN: "%#ABCD%$KA1&$$@PBA1c@t20L",
      TOKEN_EXPIRY: "1 * 30 * 1000 * 60 * 24",
      SETTING_URL: {
        privacy: "",
        terms: "",
      },
    },
    PROD: {
      API_URL: "http://localhost:3000",
      API_ASSERT_URL: "http://localhost:3000/public/",
      ADMIN_URL: "http://localhost:4200",
      DOMAIN: "localhost:3000",
      WEB_URL: "",
      PRIVATE_KEY: "%#Qr0Y%$KA1&$$@PLP1c@t20L",
      PRIVATE_KEY_ADMIN: "%#ABCD%$KA1&$$@PBA1c@t20L",
      TOKEN_EXPIRY: "1 * 30 * 1000 * 60 * 24",
      SETTING_URL: {
        privacy: "",
        terms: "",
      },
    },
  },
  AWS: {
    LOCAL: {
      accessKeyId: "",
      secretAccessKey: "",
      awsRegion: "",
      S3: {
        bucket: "",
        s3Url: "",
        directories: {
          users: "users/",
          admin: "admin/",
        },
      },
    },
    PROD: {
      accessKeyId: "",
      secretAccessKey: "",
      awsRegion: "",
      S3: {
        bucket: "",
        s3Url: "",
        directories: {
          users: "users/",
          admin: "admin/",
        },
      },
    },
    DEV: {
      accessKeyId: "",
      secretAccessKey: "",
      awsRegion: "",
      S3: {
        bucket: "",
        s3Url: "",
        directories: {
          users: "users/",
          admin: "admin/",
        },
      },
    },
  },
  DATABASE: {
    LOCAL: {
      host: "localhost",
      name: "applify_calander12",
      user: "root",
      password: "Vaneet5509@",
    },
    PROD: {
      host: "",
      name: "",
      user: "",
      password: "",
    },
    DEV: {
      host: "localhost",
      name: "sequelize_demo",
      user: "root",
      password: "",
    },
  },
  EMAIL: {
    LOCAL: {
      MAIL_SERVICE: "Gmail",
      FROM_EMAIL: "techgeekco20to25@gmail.com",
      SMTP_CREDENTIALS: {
        email: "techgeekco20to25@gmail.com",
        password: "altplnhgtoltpcqb",
      },
    },
    PROD: {
      MAIL_SERVICE: "Gmail",
      FROM_EMAIL: "",
      SMTP_CREDENTIALS: {
        email: "",
        password: "",
      },
    },
    DEV: {
      MAIL_SERVICE: "Gmail",
      FROM_EMAIL: "techgeekco20to25@gmail.com",
      SMTP_CREDENTIALS: {
        email: "techgeekco20to25@gmail.com",
        password: "altplnhgtoltpcqb",
      },
    },
  },
  FCM: {
    LOCAL: {
      SERVER_KEY: "",
    },
    PROD: {
      SERVER_KEY: "",
    },
    DEV: {
      SERVER_KEY: "",
    },
  },
};
module.exports = globalConstants;
