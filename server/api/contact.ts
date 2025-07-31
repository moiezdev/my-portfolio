import nodemailer from 'nodemailer'
import {defineEventHandler, readBody} from 'h3'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.gmailUser,
            pass: config.gmailPass
        }
    })

    const mailOptions = {
        from: `"Portfolio Contact Form" <${config.gmailUser}>`, // 👈 this sets the display name
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
    }

    try {
        await transporter.sendMail(mailOptions)
        return {success: true, message: 'Email sent successfully'}
    } catch (error) {
        console.error(error)
        return {success: false, message: 'Failed to send email'}
    }
})
