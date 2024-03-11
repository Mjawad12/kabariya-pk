import { google } from "googleapis";
import nodemailer from "nodemailer";

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

    const accessToken = await oAuth2CLient
      .getAccessToken()
      .then((res) => {
        console.log(res.token);
      })
      .catch((error) => {
        console.log(error.message, "first");
      });

    const transport = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secureConnection: false,
      startTLS: true,
      requireTLS: true,
      auth: {
        type: "OAuth2",
        user: "kabariyaofficialpk@gmail.com",
        clientId: Client_ID,
        clientSecret: Client_SECRET,
        refreshToken: Refresh_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    const result = await transport.sendMail(mailoptions);

    return Response.json({ send: result }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
