import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL

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
    const response = await axios.post(`${apiUrl}users`, {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
    return { success: false, message: errorMessage };
  }
};

/*--------------------------- CREATE SESSION ---------------------------*/
export const createSession = async ({ email, password }) => {
  try {
    const response = await axios.post(`${apiUrl}users/sign_in`, {
      user: {
        email: email,
        password: password,
      },
    });

    const token = response.data.token

    if (token) {
      localStorage.setItem("jwt_token", token)
    }

    console.log("User logged in successfully:", response.data)
    return { success: true, data: response.data, token };
    
  } catch (error) {
    const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
    console.error("Error during session creation:", errorMessage);
    return { success: false, message: errorMessage };
  }
};

/*--------------------------- END SESSION ---------------------------*/
export const endSession = async () => {
  const token = localStorage.getItem("jwt_token")

  if (!token) {
    console.error("User is not authenticated")
      return
  }

  try {
    const response = await axios.delete(`${apiUrl}users/sign_out`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    localStorage.removeItem("jwt_token")

    console.log("User logged out successfully:", response.data)
    return { success: true, message: "User logged out successfully" 

    }
  } catch (error) {
    const errorMessage = error.response?.data?.errors
      ? error.response.data.errors.join(", ")
      : error.message || "An unexpected error occurred";
    console.error("Error during session termination:", errorMessage);
    return { success: false, message: errorMessage };
  }
}