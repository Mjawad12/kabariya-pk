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
  const { username, email, phone, message } = details;

  return (
    <Html>
      <Head />
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
                  New Client Contacted you : {username}
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Details
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {username}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email Address: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone number: </b>
                  {phone}
                </Text>

                <Heading
                  as="h3"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Message
                </Heading>
                <Text
                  style={{
                    ...paragraph,
                    marginTop: -5,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  {message}
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

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
