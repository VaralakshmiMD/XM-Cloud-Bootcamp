import nodemailer from 'nodemailer';
type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};
const smtpOptions = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: parseInt('465'),
  secure: true,
  auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_KEY },
};
console.log('UserName : ' + process.env.SMTP_USERNAME);
console.log('Password : ' + process.env.SMTP_KEY);
export const SendEmail = async (emailData: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });
  return await transporter.sendMail({
    from: process.env.SMTP_USERNAME,
    ...emailData,
  });
};
