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
  Img,
  Tailwind,
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
    imgUrls,
  } = details;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
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
                    {email && email}
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
                    style={{
                      ...paragraph,
                      marginTop: -5,
                      fontStyle: "italics",
                    }}
                  >
                    {remarks}
                  </Text>
                  <Heading
                    as="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Images({imgUrls?.length})
                  </Heading>
                  {imgUrls?.map((it, key) => (
                    <div
                      key={key}
                      className="flex flex-col justify-center items-center w-full gap-7"
                    >
                      <Img
                        src={it}
                        width="40"
                        height="37"
                        alt="Vercel"
                        className="my-0 mx-auto w-full h-full"
                      />
                    </div>
                  ))}
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
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

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
