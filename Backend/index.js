import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5002;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sendEmail", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const userEmail = process.env.USER_MAIL;
    const userPassword = process.env.MAIL_PASSWORD;

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: `${userEmail}`,
                pass: `${userPassword}`,
            },
        });


        await transporter.sendMail({
            from: `${userEmail}`,
            to: `${userEmail}`,
            subject: `Contact Form Submission from My portfolio: ${subject}`,
            text: `
                 You have a new message from your website contact form:
      
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
                `,
        });

        return res.status(204).json({message:"Mail Sent Successfully"});
    }
    catch (err) {
        console.log("Error while sending mail:", err);
        res.status(500).json({message:"Internal Server Error"});
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});