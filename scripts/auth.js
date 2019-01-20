//listen for auth changes
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("guides")
      .get()
      .then(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      });
  } else {
    setupUI();
    setupGuides([]);
  }
});

//create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", e => {
  e.preventDefault();
});

//sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // signup user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

//logout method

const logout = document.querySelector("#logout");
logout.addEventListener("click", e => {
  e.preventDefault();
  auth.signOut().then(() => {});
});

//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    //close the login modal and reset the form
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
