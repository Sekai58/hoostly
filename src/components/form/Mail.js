import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./Email";

export const sendMail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: "unaruto2058@gmail.com",
      pass: "yiak wmof eyse bjap",
    },
  });

  const emailHtml = render(<Email url="https://example.com" />);

  const options = {
    from: "unaruto2058@gmail.com",
    to: "amritachi58@gmail.com",
    subject: "hello world",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);
  } catch (error) {
    console.log("error");
  }
};

// export const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "unaruto2058@gmail.com",
//     pass: "yiak wmof eyse bjap",
//   },
// });
