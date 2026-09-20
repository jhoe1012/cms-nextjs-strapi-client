"use server";

import { z } from "zod";
import { SubscribeService } from "./services";

const subscribeSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
});

export async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const validatedFields = subscribeSchema.safeParse({
    email: email,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const responseData = await SubscribeService(validatedFields.data.email);

  console.log(responseData);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Ops! Something went wrong. Please try again,",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      errorMessage: "Failed to subscribe",
    };
  }

  return {
    ...prevState,
    strapiErrors: responseData.error,
    zodErrors: null,
    errorMessage: null,
    successMessage: "Successfully Subscribe!",
  };
}
