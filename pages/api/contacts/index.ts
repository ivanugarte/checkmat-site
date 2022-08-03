import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/index";
import MailService from "@sendgrid/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { SENDGRID_API_KEY, GOOGLE_RECAPTCHA_SECRET } = process.env;
  MailService.setApiKey(SENDGRID_API_KEY!);

  const {
    body: { name, email, phone, message, captcha },
    method,
  } = req;
  const _toISOString = new Date().toISOString();
  const phoneString = req.body.phone.toString();
  switch (method) {
    case "POST":
      try {
        // If captcha are missing return an error
        if (!captcha) {
          return res.status(422).json({
            message: "Recaptcha is missing.",
          });
        }
        const response = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET!}&response=${captcha}`,
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=utf-8",
            },
            method: "POST",
          }
        );
        const captchaValidation = await response.json();

        if (captchaValidation.success) {
        }
        const msg = {
          to: [
            {
              email: "ivanugartem@gmail.com",
              name: "Ivan Ugarte",
            },
            {
              email: "thiagodiasdev@gmail.com",
              name: "Thiago Dias",
            },
          ],
          from: {
            email: "noreply@duweb.site",
            name: "Contacto Duweb",
          },
          subject: `Contacto Web - Duweb - ${name}`,
          text: `Name: ${name} - Phone: ${phone.toString()} - Message: ${message}`,
          html: `<div> <strong>Name:</strong> ${name} <br/> - <strong>Phone:</strong> ${phone.toString()} <br/> - <strong>Message:</strong> ${message}</div>`,
        };

        MailService.send(msg)
          .then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers);
          })
          .catch((error) => {
            console.error(error);
          });
        res.json(
          await prisma.contact.create({
            data: {
              name: name,
              email: email,
              phone: phoneString,
              message: message,
              readed: false,
              created_at: _toISOString,
              updated_at: _toISOString,
            },
          })
        );
      } catch (error) {
        console.log(error);
        res.status(500).end(`Something goes wrong. Error: ${error}`);
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
