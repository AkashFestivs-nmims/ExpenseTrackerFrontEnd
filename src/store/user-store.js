import { writable } from "svelte/store";
import {fetchDynamic} from "../Script/Script";

export const user = writable({
    id : 0,
    firstname : '',
    lastname : '',
    phoneNumber : '',
    email : '',
    address : '',
    userBio : '',
    profilPicUrl : '',
    role : ''
});

// fetchDynamic('/get-user-detail','POST')
//     .then(data => {
//         data = data[0]
//         user.update((userData) =>{

//         userData.firstname = data.first_name
//         userData.lastname = data.last_name
//         userData.email = data.email
//         userData.phoneNumber = data.phone_number
//         userData.id = data.user_lid
//         userData.profilPicUrl = data.profil_pic_url
//         userData.userBio = data.profil_bio
//         userData.address = data.address
//         userData.role = data.name
//         document.documentElement.style.setProperty("--profilUrl", `url(${data.profil_pic_url})`);
//         return userData;
//     })

// })

// Function to get the value of a specific cookie
function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Check if the cookie name matches the parameter
      if (cookie.startsWith(name + '=')) {
        // Extract and return the cookie value
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    // Return null if cookie not found
    return null;
  }
  
  // Example usage: Get the value of 'myCookie'
  const myCookie = getCookie('myCookie');
  console.log('My cookie value : ',myCookie);