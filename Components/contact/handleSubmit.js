import { contactSchema } from "@/lib/validations/contactSchema";

export const validateContactField = (name, value) => {
  const fieldSchema = contactSchema.shape[name];

  if (!fieldSchema) {
    return "";
  }

  const result = fieldSchema.safeParse(value ?? "");

  return result.success ? "" : result.error.issues[0]?.message || "";
};

export const validateContactForm = (data) => {
  const validation = contactSchema.safeParse(data);

  if (validation.success) {
    return {
      valid: true,
      errors: {},
      data: validation.data,
    };
  }

  const fieldErrors = validation.error.flatten().fieldErrors;

  return {
    valid: false,
    errors: {
      name: fieldErrors.name?.[0] || "",
      phone: fieldErrors.phone?.[0] || "",
      email: fieldErrors.email?.[0] || "",
      inquiryType: fieldErrors.inquiryType?.[0] || "",
      message: fieldErrors.message?.[0] || "",
      form: "",
    },
    data: null,
  };
};

export const handleSubmit = async (
  e,
  setErrors,
  setIsPending,
  setFormData
) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
  };

  const validation = validateContactForm(data);

  if (!validation.valid) {
    setErrors(validation.errors);
    return;
  }

  // Validation successful
  setErrors({});
  setIsPending(true);

  const validatedData = validation.data;

  try {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(validatedData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Something went wrong"
      );
    }

    // Database successful
    form.reset();
    if (setFormData) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "Intraocular Lenses (IOLs)",
        message: "",
      });
    }

    // WhatsApp
    const whatsappNumber = "919896099091";

    const whatsappMessage = `
Hello AV Meditech,

New Inquiry

Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Inquiry Type: ${validatedData.inquiryType}
Message: ${validatedData.message || "N/A"}
    `.trim();

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.location.href = whatsappURL;

  } catch (error) {
    console.error("Submit Error:", error);

    setErrors({
      form: error.message || "Something went wrong",
    });

  } finally {
    setIsPending(false);
  }
};
