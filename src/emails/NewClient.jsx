import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const YelpRecentLoginEmail = (details) => {
  const {
    username,
    email,
    phone,
    city,
    address,
    remarks,
    prefrence,
    scrap,
    pupolar,
    date,
    time,
  } = details;

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Image src="" />
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                {/* <Img
                  src={`${baseUrl}/static/vercel-logo.png`}
                  width="40"
                  height="37"
                  alt="Vercel"
                  className="my-0 mx-auto"
                /> */}
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  New Client : {username}
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Details of the New Client
                </Heading>
                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Contact Information
                </Heading>
                <Text style={paragraph}>
                  <b>Name: </b>
                  {username}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone number: </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email Address: </b>
                  {email}
                </Text>

                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Location Information
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>City: </b>
                  {city}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Address : </b>
                  {address}
                </Text>
                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Scrap Information
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Prefrences : </b>
                  {prefrence}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Type of scarps : </b>
                  {scrap}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Pupolar : </b>
                  {pupolar}
                </Text>

                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Date and time Information
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Date of Collection : </b>
                  {date}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Time : </b>
                  {time}
                </Text>
                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Remarks
                </Heading>
                <Text
                  style={{ ...paragraph, marginTop: -5, fontStyle: "italics" }}
                >
                  {remarks}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default YelpRecentLoginEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
