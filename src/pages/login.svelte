<script>
import Alerts from './../components/alerts.svelte';
import {setAlert} from '../store/alert-store.js';
import { fetchDynamic, setEncryptedCookie} from '../Script/Script';
import { user } from './../store/user-store.js';
import { navigate } from 'svelte-routing';
import { property } from '../store/property-store';


let username = '';
let password = ''; 

    async function loginHandeler(){

        if(username.length == 0 && password.length == 0){
            setAlert.update((data) => {
            data.isOpen = true,
            data.alertType = 'warning',
            data.alertmsg = 'Input fileds are Empty'
            return data;
            })
            return;
        }

        let sendobj =await {'username' : username , 'password' : password};
        let data = await fetchDynamic('/verify-user','POST',sendobj);
        let userinfo = data[0];
        console.log('userData : ',data[0]);

        if(!userinfo){
            setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'error',
                data.alertmsg = 'Not a valid User.'
                return data;
            })
        }

        if(userinfo.password == password){

            user.update((userData) => {

                userData.firstname = userinfo.first_name;
                userData.lastname = userinfo.last_name;
                userData.email = userinfo.email;
                userData.phoneNumber = userinfo.phone;
                userData.id = userinfo.user_lid;
                userData.profilPicUrl = userinfo.profil_pic_url;
                userData.userBio = userinfo.profile_bio;
                userData.address = userinfo.address;
                userData.role = userinfo.role_name;
                document.documentElement.style.setProperty("--profilUrl", `url(${userinfo.profile_pic_url})`);

                return userData;
            })

            const cookieValue = {'key' : userinfo.key};
            console.log('cookei value : ',cookieValue);
                if(cookieValue.key != null){
                    let key = setEncryptedCookie('expenseTracker',cookieValue);
                    property.update((data) =>{
                    data.key = key[0]
                    return data;
                })
            }

            navigate('/theamDashboard');


        }else{

            setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'error',
                data.alertmsg = 'Login Failed'
                return data;
            });

        }




    }

</script>
{#if $setAlert.isOpen}
    <Alerts />
{/if}

<main>
<div class="loginForm">

    <div class="formTab">
        <div class="div" id="formTabHeader">
            <img src="/icons/money-investment.gif" alt="logo" id="loginLogo" class="p-2"/>
            <h6><b>Expense Tracker</b></h6>
            <small style="margin-top: -1%; margin-left: 50%;"><u>One Place For All Expense Tracking</u>...</small>
            <hr>
        </div>
        <div class="formTableBody">
            <div class="formTableBodyInput container">
                <label for="username">Username : </label>
                <input type="text" placeholder="Username" id="username" class="form-control" bind:value={username}/>
                <label for="password">Password :</label>
                <input type="text" placeholder="Password" id="password" class="form-control" bind:value={password}/>
                <br>
                <button class="form-control btn btn-info" on:click={loginHandeler}>Login</button>
            </div>
        </div>
        <div class="formTableFooter container" >
            <p><b>&#9993; Email : </b>expenseTracker@gmail.com</p>
            <p><b>&#9742; Phone : </b>9876543210</p>
        </div>

    </div>


</div>

</main>


<style>

main{
    height: 100vh;
    background-image: url('/icons/loginbg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.loginForm{
    
    display: grid;
    justify-items: center;
    width: 40%;
    height: 100%;
}

.formTab{

    margin-top: 15%;
    width: 70%;
    height: 80%;
    border: 1px solid black;
    border-radius: 10%;

}

#formTabHeader{
    display: grid;
    justify-items: center;
    height: 10%;
}

#loginLogo{
    width: 90px;
    border-radius: 100%;
}

.formTableBody{
    height: 50%;
    margin-top: 30%;
}

.formTableFooter{
    height: 10%;
}




</style>