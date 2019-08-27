export default {
  host: process.env.MAIL_HOST,
  port: 2525,
  secure: false,
  auth: {
    user: 'ba5a6262884c24',
    pass: '73cf9db2bad927',
  },
  default: {
    from: 'Equipe GoBarber<noreply@gobarber.com>',
  },
};

// Amazon SES
// Mailgun
// Sparkpost
// mailtrap(dev)
