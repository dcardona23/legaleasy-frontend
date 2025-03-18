export const registerUser = async ({ firstName, lastName, email, password, password_confirmation }) => {

  if (!firstName || !lastName || !email || !password) {
    console.error('All fields are required');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user:{
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      })
    });

    const data = await response.json();  // Parse the response

    if (!response.ok) {
      console.error('Error during registration:', data.errors);
      const errorMessages = data.errors.join(', ');
      throw new Error(errorMessages);  // Show all the errors in one message
    }

    console.log('User registered successfully:', data);

  } catch (error) {
    console.error('Error during registration:', error.message);
  }
};
