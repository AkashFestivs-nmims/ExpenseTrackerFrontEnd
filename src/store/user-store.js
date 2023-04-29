import { writable } from "svelte/store";
import {fetchDynamic, getCookie} from "../Script/Script";


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


  
  const myCookie = getCookie('myCookie');
  let cookie = JSON.parse(myCookie);

  fetchDynamic('/get-user-detail','POST',cookie)
    .then(data => {
        data = data[0]
        user.update((userData) =>{

        userData.firstname = data.first_name
        userData.lastname = data.last_name
        userData.email = data.email
        userData.phoneNumber = data.phone_number
        userData.id = data.user_lid
        userData.profilPicUrl = data.profil_pic_url
        userData.userBio = data.profil_bio
        userData.address = data.address
        userData.role = data.name
        document.documentElement.style.setProperty("--profilUrl", `url(${data.profil_pic_url})`);
        return userData;
    })

})