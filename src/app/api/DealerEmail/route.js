import { Resend } from "resend";
import NewDealerEmail from "@/emails/NewDealerEmail";

export async function POST(req) {
  const resend = new Resend("re_5zUXTyRk_5YjQ9pTa7WGchv55CiBuEVqH");
  const details = await req.json();
  try {
    const status = await resend.emails.send({
      from: `onreply@${process.env.EMAIL_URL}`,
      to: "Kabariya.official@gmail.com",
      subject: "New Dealer Contacted",
      react: NewDealerEmail(details),
    });
    return Response.json({ status });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: error.message });
  }
}
