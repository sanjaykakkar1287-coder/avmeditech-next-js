import { connectDB } from "@/lib/db";
import Contact from "@/Schema/Contact";
import { contactSchema } from "@/lib/validations/contactSchema";

export async function POST(req) {
  try {
    const body = await req.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return Response.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create(validation.data);

    return Response.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: contact,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}