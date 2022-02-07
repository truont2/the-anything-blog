
// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   console.log("loggin in");
//   const username = document.querySelector("#InputUsername").value.trim();
//   const password = document.querySelector("#Password").value.trim();

//   if (username && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to log in.");
//     }
//   }
// };

// const form = document.querySelector(".login")
// form.addEventListener("submit", () => console.log('test'));
// form.addEventListener("submit", loginFormHandler);

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


