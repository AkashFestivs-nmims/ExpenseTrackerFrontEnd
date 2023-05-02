import { writable } from "svelte/store";
import {fetchDynamic,getDecryptedCookie} from "../Script/Script";
import { property } from "./property-store";
import Cookies from 'js-cookie';


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


if(Cookies.get('expenseTracker')){
    const myCookie = getDecryptedCookie('expenseTracker');
    if(myCookie != null){

        fetchDynamic('/get-user-detail','POST',myCookie)
        .then(data => {
            data = data[0]
            user.update((userData) =>{
                
                userData.firstname = data.first_name
                userData.lastname = data.last_name
                userData.email = data.email
                userData.phoneNumber = data.phone
                userData.id = data.user_lid
                userData.profilPicUrl = data.profil_pic_url
                userData.userBio = data.profile_bio
                userData.address = data.address
                userData.role = data.role_name
                document.documentElement.style.setProperty("--profilUrl", `url(${data.profile_pic_url})`);
                return userData;
              })
              
          })
      }
}

