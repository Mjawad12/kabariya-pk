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
                    New Dealer : {details["Full Name"]}
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Details of the New Dealer
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
                    {details["Full Name"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>Shop/Business Name: </b>
                    {details["Shop/Business Name"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>Father Name: </b>
                    {details["Father Name"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>CNIC: </b>
                    {details["CNIC"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>Date of Birth: </b>
                    {details["Date of Birth"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>Email: </b>
                    {details["Email (Optional)"]}
                  </Text>
                  <Text style={paragraph}>
                    <b>Use Smart mobile : </b>
                    {details["sM"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>ShopAddress : </b>
                    {details["ShopAddress"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Qualifications : </b>
                    {details["Qualifications"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>city : </b>
                    {details["city"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>town : </b>
                    {details["town"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>phone : </b>
                    {details["phone"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>whatsapp : </b>
                    {details["whatsapp"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>other number : </b>
                    {details["other number"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>pickupAreas : </b>
                    {details["pickupAreas"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>pickupVehicles : </b>
                    {details["pickupVehicles"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Purchasing strength Start : </b>
                    {details["purchasingStart"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Purchasing strength End : </b>
                    {details["purchasingEnd"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Scrap : </b>
                    {details["scrap"]}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>others : </b>
                    {details["others"]}
                  </Text>
                  <Heading
                    as="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Bank details({details["bankDetails"].length})
                  </Heading>
                  {details["bankDetails"].map((it, index) => {
                    return (
                      <div className="w-full flex flex-col">
                        <Heading
                          as="h4"
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: "start",
                          }}
                        >
                          Bank {index} :
                        </Heading>
                        <div className="flex flex-col gap-2">
                          <Text style={{ ...paragraph }}>
                            <b>Bank : </b>
                            {it.bank}
                          </Text>

                          <Text style={{ ...paragraph }}>
                            <b>Account name : </b>
                            {it.accountname}
                          </Text>

                          <Text style={{ ...paragraph }}>
                            <b>IBAN no : </b>
                            {it.Ibanno}
                          </Text>
                        </div>
                      </div>
                    );
                  })}
                  <Heading
                    as="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Profile Image
                  </Heading>
                  <Img
                    src={details?.profileimg[0]}
                    width="40"
                    height="37"
                    alt=""
                    className="my-0 mx-auto w-full h-full"
                  />

                  <Heading
                    as="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    CNIC IMAGES
                  </Heading>
                  {details.Cnicimg?.map((it, key) => (
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
                  <Heading
                    as="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    SHOP IMAGES
                  </Heading>
                  {details.shopimages?.map((it, key) => (
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
