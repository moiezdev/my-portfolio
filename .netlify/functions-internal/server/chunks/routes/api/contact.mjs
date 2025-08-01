import { d as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const contact = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.gmailUser,
      pass: config.gmailPass
    }
  });
  const mailOptions = {
    from: `"Portfolio Contact Form" <${config.gmailUser}>`,
    // 👈 this sets the display name
    to: config.gmailUser,
    subject: `New message from ${body.name}`,
    text: `
You have received a new message via your portfolio contact form.

----------------------------------------
Name: ${body.name}
Email: ${body.email}

Message:

        ${body.message}
        
----------------------------------------
Please reply to the sender's email if you wish to respond.
  `
  };
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email" };
  }
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
