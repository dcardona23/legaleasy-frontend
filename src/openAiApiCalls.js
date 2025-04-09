import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

/*--------------------------- POST OPENAI ---------------------------*/
export const postOpenAI = async ({ formInput }) => {
  const token = localStorage.getItem("jwt_token");

  if (!token) {
    console.error("User is not authenticated");
    return { success: false, message: "User is not authenticated" };
  }

  try {
    const response = await axios.post(
      `${apiUrl}/openai`,
      { formInput }, // Request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
    console.error("Error during OpenAI request:", errorMessage);
    return { success: false, message: errorMessage };
  }
};
