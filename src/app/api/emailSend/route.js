import { SMTPClient } from "emailjs";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import Mailgun from "mailgun.js";
import * as FormData from "form-data";
import * as SibApiV3Sdk from "@sendinblue/client";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import Mailjet from "node-mailjet";

export async function POST(request) {
  const details = await request.json();
  try {
    const Client_ID = process.env.CLIENT_ID;

    const Client_SECRET = process.env.CLIENT_SECRET_STRING;
    const Redirect_URI = process.env.REDIRECT_STRING;
    const Refresh_TOKEN = process.env.REFRESH_STRING_TOKEN;

    const oAuth2CLient = new google.auth.OAuth2(
      Client_ID,
      Client_SECRET,
      Redirect_URI
    );
    oAuth2CLient.setCredentials({
      refresh_token: Refresh_TOKEN,
    });
    const html = `<h1>New Client From <b>${details.city}</b></h1>
      <br/>
      <h2>Client Information</h2>
      <br/>
      <h3>Contact Information</h3>: <br/>
      Name: ${details.name}  <br/>
      Phone Number: ${details.phone}  <br/>
      Email Address: ${details.email}  <br/>

      Location Details:  <br/>
      City: ${details.city}       <br/>
      Address: ${details.address}  <br/>
      <hr/>
      Scrap Information: <br/>
      Preference: ${details.prefrence}  <br/>
      Type of scrap : ${details.type}  <br/>
      Pupolar : ${details.pupolar}      <br/>
      <hr/>
      Date of Collection: ${details.date}<br/>
      Date of Time: ${details.time}<br/>
      Additional Remarks: ${details.remarks} <br/>
      <hr/>
      `;
    const mailoptions = {
      from: "kabariyaofficialpk@gmail.com",
      to: "kabariyaofficialpk@gmail.com",
      subject: "New Client",
      text: `Your new Client has messaged you.`,
      html,
    };

    const transport = await nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      // ignoreTLS: true, // add this
      auth: {
        user: "kabariyaofficialpk@gmail.com",
        pass: "ynaz uuxq hzim dubp",
        // clientId: Client_ID,
        // clientSecret: Client_SECRET,
        // refreshToken: Refresh_TOKEN,
        // accessToken: (await oAuth2CLient.getAccessToken()).token,
      },
      // tls: {
      //   rejectUnAuthorized: false,
      // },
    });
    console.log(transport.options);
    transport.verify((err, success) => {
      if (err) console.log(err);
    });

    const result = await transport.sendMail(mailoptions);

    // const client = new SMTPClient({
    //   user: "kabariyaofficialpk@gmail.com",
    //   password:
    //     "xsmtpsib-e82f33e9626449679750f331077148954e179b5eec68cb28a4984ade80805ca6-nNFVcj854wsJhm7E",
    //   host: "smtp-relay.sendinblue.com",
    //   ssl: true,
    // });

    // const transporter = await nodemailer.createTransport({
    //   host: "smtp-relay.brevo.com",
    //   port: 587,
    //   secure: "true",
    //   auth: {
    //     user: "kabariyaofficialpk@gmail.com",
    //     pass: "xsmtpsib-e82f33e9626449679750f331077148954e179b5eec68cb28a4984ade80805ca6-nNFVcj854wsJhm7E",
    //   },
    // });

    // const mailoptions = {
    //   from: "kabariyaofficialpk@gmail.com",
    //   to: "swiftrentalsofficial@gmail.com",
    //   subject: "New Client",
    //   text: `Your new Client has messaged you.`,
    // };

    // const result = await client.send(mailoptions, (err, message) => {
    //   console.log(err || message);
    //   if (err) {
    //     return Response.json({ err }, { status: 200 });
    //   }
    // });

    // const result = await transporter.sendMail(mailoptions, (error, info) => {
    //   error && console.log(error);
    //   info && console.log(info);
    // });

    // const mailgun = new Mailgun(FormData);
    // const client = mailgun.client({
    //   username: "api",
    //   key: "pubkey-b7aac9ca7d43c2997e4e3f028ba310fd",
    // });
    // const mailoptions = {
    //   from: "kabariyaofficialpk@gmail.com",
    //   to: "kabariyaofficialpk@gmail.com",
    //   subject: "New Client",
    //   text: `Your new Client has messaged you.`,
    // };

    // const res = await client.messages
    //   .create(
    //     "sandbox40df65dfb58b44ecb3d0d987bd42e727.mailgun.org",
    //     mailoptions
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // const api_token =
    //   "mlsn.69ca90d949ec4cfc9dcc14f64a65b424f6564c6605080adb848b6234fbfb9ea9";

    // const mailerSend = new MailerSend({
    //   apiKey: api_token,
    // });

    // const sentFrom = new Sender("kabariyaofficialpk@gmail.com", "Kabariya");

    // const recipients = [
    //   new Recipient("kabariyaofficialpk@gmail.com", "Kabariya"),
    // ];

    // const emailParams = new EmailParams()
    //   .setFrom(sentFrom)
    //   .setTo(recipients)
    //   .setReplyTo(sentFrom)
    //   .setSubject("This is a Subject")
    //   .setHtml("<strong>This is the HTML content</strong>")
    //   .setText("This is the text content");

    // const res = await mailerSend.email
    //   .send(emailParams)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));

    // const mailjet = Mailjet.apiConnect(
    //   "d071a5cc4f210812a2d969d0231fe438",
    //   "e48fdb2bc56524cc433673f517e56dfd"
    // );
    // const request = mailjet.post("send", { version: "v3.1" }).request({
    //   Messages: [
    //     {
    //       From: {
    //         Email: "kabariyaofficialpk@gmail.com",
    //         Name: "Me",
    //       },
    //       To: [
    //         {
    //           Email: "kabariyaofficialpk@gmail.com",
    //           Name: "You",
    //         },
    //       ],
    //       Subject: "My first Mailjet Email!",
    //       TextPart: "Greetings from Mailjet!",
    //       HTMLPart:
    //         '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    //     },
    //   ],
    // });
    // request
    //   .then((result) => {
    //     console.log(result.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
