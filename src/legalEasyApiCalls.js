/*--------------------------- REGISTER USER ---------------------------*/
export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
  password_confirmation,
}) => {
  if (!firstName || !lastName || !email || !password) {
    console.error("All fields are required");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error during registration:", data.errors);
      const errorMessages = data.errors.join(", ");
      throw new Error(errorMessages);
    }

    console.log("User registered successfully:", data);
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};

/*--------------------------- CREATE SESSION ---------------------------*/
export const createSession = async ({ email, password }) => {
  try {
    const response = await fetch("http://localhost:3000/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error during session:", data.errors);
      const errorMessages = data.errors.join(", ");
      throw new Error(errorMessages);
    }

    console.log("Session started successfully.");
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};
