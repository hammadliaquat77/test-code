
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
    authDomain: "batch-11-3191d.firebaseapp.com",
    projectId: "batch-11-3191d",
    storageBucket: "batch-11-3191d.appspot.com",
    messagingSenderId: "1087219169012",
    appId: "1:1087219169012:web:6d73730016abb42edb90a1",
    measurementId: "G-D7P8TVB686"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);





  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log('user is loggend in');
      
      // ...
    } else {
      // User is signed out
      console.log('User is signed out');
      
      // ...
    }
  });




let add_text = document.getElementById('add');
// let para = document.getElementById('para');
let btn = document.getElementById('btn');
let graph = document.getElementById('graph');


add_text.addEventListener('click', async ()=> {

  let paraElement = document.getElementById('para');
  let inputElement = document.getElementById('input-text');

//     const { value: text } = await Swal.fire({
//         input: "textarea",
//         inputLabel: "Message",
//         inputPlaceholder: "Type your message here...",
//         inputAttributes: {
//           "aria-label": "Type your message here"
//         },
//         showCancelButton: true
//       });
//       if (text) {
//         para.textContent = text
//         Swal.fire("Message added to paragraph!");
//       }

let input = inputElement.value
let para = paraElement.value

  if (para && input ) {
    
    graph.innerHTML += `<div class="row justify-content-center">
    <div class="col-auto">
      <div class="card custom-card">
        <div class="card-body">
          <h5 class="card-title">${input}</h5>
          <p class="card-text">${para}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <a href="" class="btn btn-primary" id='delete'>Delete</a>
        </div>
      </div>
  </div>
  
</div>`
    
    paraElement.value = ''
    inputElement.value = ''

  }else{
    alert('Enter Your Title and Text')
  }
  

 })


btn.addEventListener('click', ()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.');
    
    window.location.href='signup.html'

    }).catch((error) => {
      // An error happened.
      console.log('An error happened.');
      
    });
})


let Delete = document.getElementById('delete');

Delete.addEventListener('click', (e)=> {

 e.parentElemen.remove()
})