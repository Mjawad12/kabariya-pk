import ConnectDb from "../DbConnect";
import ReviewSchema from "../Schemas/ReviewSchema";

export async function POST(req) {
  await ConnectDb();
  const data = await req.json();
  console.log(data);

  const review = await ReviewSchema.create({
    name: data.name,
    review: data.review,
    image: data.image,
    rating: data.rating,
    phone: data.phone,
    email: data.email,
    designation: data.designation,
  });

  return Response.json({ review, success: true });
}

export const dynamic = "force-dynamic";
