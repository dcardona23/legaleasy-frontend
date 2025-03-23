import axios from 'axios';

/*--------------------------- REGISTER USER ---------------------------*/
export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
  password_confirmation,
}) => {
  if (!firstName || !lastName || !email || !password) {
    return { success: false, message: "All fields are required" };
  }

  try {
    const response = await axios.post("http://localhost:3000/users", {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        },
      })

      return { success: true, data: response.data }

    } catch (error) {
      const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
      return { success: false, message: errorMessage }
  }
};

/*--------------------------- CREATE SESSION ---------------------------*/
export const createSession = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:3000/users/sign_in", {
        user: {
          email: email,
          password: password,
        },
      })

      return { success: true, data: response.data }

    } catch (error) {
      const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
      console.error("Error during session creation:", errorMessage);
      return { success: false, message: errorMessage }
  }
}