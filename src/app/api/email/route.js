import { Resend } from "resend";
import NewClient from "@/emails/NewClient";

export async function POST(req) {
  const resend = new Resend("re_5zUXTyRk_5YjQ9pTa7WGchv55CiBuEVqH");
  const details = await req.json();
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kabariyaofficialpk@gmail.com",
    subject: "New Client",
    react: NewClient(details),
  });

  return Response.json({ status: "ok" });
}
