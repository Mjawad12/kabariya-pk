import { Resend } from "resend";
import NewClient from "@/emails/NewClient";

export async function POST(req) {
  const resend = new Resend("re_5zUXTyRk_5YjQ9pTa7WGchv55CiBuEVqH");
  const details = await req.json();
  try {
    await resend.emails.send({
      from: `onreply@${process.env.EMAIL_URL}`,
      to: "kabariyaofficialpk@gmail.com",
      subject: "New Client",
      react: NewClient(details),
    });
  } catch (error) {
    console.log(error.message);
  }

  return Response.json({ status: "ok" });
}
