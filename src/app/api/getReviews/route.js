import ConnectDb from "../DbConnect";
import ReviewSchema from "../Schemas/ReviewSchema";

export async function GET() {
  await ConnectDb();
  const reviews = await ReviewSchema.find();

  return Response.json({ reviews });
}

export const dynamic = "force-dynamic";
