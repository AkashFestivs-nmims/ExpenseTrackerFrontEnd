<script>
import {Router, Route, Link, navigate} from 'svelte-routing';
import {setAlert} from '../store/alert-store.js';
import { fetchDynamic, setEncryptedCookie} from '../Script/Script';


    let loading = false;
    let isChecked = false;

    let first_name,last_name,phone,email,address,password,confirmPassword;
    let phoneSpan ,passwordSpan,accountexists;

    let emoji = `url('/public/icons/gif/uwuemoji.gif')`;

    $: document.documentElement.style.setProperty("--emoji", emoji);

    function away(){
        emoji = `url('/public/icons/gif/mehEmoji.gif')`;
        document.documentElement.style.setProperty("--emoji", emoji);
    }

    function again(){
        emoji = `url('/public/icons/gif/uwuemoji.gif')`;
        document.documentElement.style.setProperty("--emoji", emoji); 
    }


    async function submitHandeker(){
        loading = true;
        if(phone.length > 10){
            phoneSpan="Something Fishy !";
            emoji = `url('/public/icons/gif/noEmohi.gif')`;
            
            return;
        }

        if(password != confirmPassword){
            passwordSpan="Do not match !";
            emoji = `url('/public/icons/gif/noEmohi.gif')`;
            return;
        }

        try{

            let userObj = {'user' : [{
                first_name,
				last_name,
				phone,
				email,
				address,
				password
            }]}

            console.log('Send OBJ : ',JSON.stringify(userObj))

            let data = await fetchDynamic('/register-user','POST',userObj);

            console.log('Regustertion Data : ',data)

            if(data[0].register_user?.status === 200){
                emoji = `url('/public/icons/gif/loveEmoji.gif')`;
                accountexists = 'You can Login NOW !';
                loading = false;
            }


        }catch(err){
            if(err.word == 'already'){
                emoji = `url('/public/icons/gif/loveEmoji.gif')`;
                accountexists = 'You already have an account with Us, Just Login !'
                loading = false;
            }
        }

    }


</script>

<main>

<div class="row regForm">
    <div class="col-md-5" id="regLeft" >
        <div class="expenseTrackerIcon"></div>
        <div>
            <h1>Expense Tracker</h1>
        </div>
        <div style="width: 100%; background-color: black; height: 2px;"></div>
        <div style="margin-top: 50px;">
            <h5>Track Your All Expences At One Place</h5>
        </div>
        <div style="margin-top: 50px;">
            <ul>
                <li>Add All Your Expenses With Expense Type</li>
                <li>Get All The Data In Form Of Charts</li>
                <li>User Friendly InterFace</li>
                <li>Get Weekly,Monthly,Quarterly,Yearly And Even Daily Calculation Done</li>
                <li>Can Store List Of Data</li>
                <li>Customizable</li>
                <li>And Many More...</li>
            </ul>
        </div>
    </div>
    <div class="col-md-7" id="regRight" >
        <div class="regBody">
                <div class="emoji">

                </div>
                <div>
                    <h3><u style="color: black;"> Register Your-Self Here</u></h3>
                </div>
            <div class="userInfo">
                <div class="row">
                        <div class="col-md-4">
                            <label for="firstname" >First Name :</label>
                            <input class="form-control" type="text" id="firstname" bind:value={first_name} on:focus={again}>
                        </div>
                        <div class="col-md-4">
                            <label for="lastname" >Last Name :</label>
                            <input class="form-control"  type="text" id="lastname" bind:value={last_name} on:focus={again}>
                        </div>
                        <div class="col-md-4">
                            <label for="phone" >Phone Number :</label><span style="color: darkred; font-size: 11px;"  id="phoneSpan">{phoneSpan ?? ''}</span>
                            <input class="form-control"  type="text" id="phone" bind:value={phone} on:focus={again}>
                        </div>
                </div>
                <div class="row">
                    <div class="col-md-7">
                        <label for="email" >email :</label> <span style="color: black;"></span>
                        <input class="form-control" type="text" id="email" bind:value={email} on:focus={again}>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <label for="address" >Address :</label>
                        <input class="form-control" style="height: 80px;" type="text" id="address" bind:value={address} on:focus={again}>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <input type="checkbox" bind:checked={isChecked} id="acceptCheckBox"> <b style="color: black;">Your Privacy is our Responsibility</b>
                </div>
                <div class:d-none={!isChecked} class="row" style="margin-top: 10px;">
                    <div class="col-md-5">
                        <label for="password" >Password :</label><span style="color: darkred; font-size: 11px;">{passwordSpan ?? ''}</span>
                        <input class="form-control" type="text" id="password" bind:value={password} on:focus={away}>
                    </div>
                    <div class="col-md-5">
                        <label for="confirmPassword" >Confirm Password :</label>
                        <input class="form-control" type="text" id="confirmPassword" bind:value={confirmPassword} on:focus={away}>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    {#if loading}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto; height: 40px;" width="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#72cbfd" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                            </circle>
                        </svg>
                    {:else}
                         <button class="form-control" style="color: black;" on:click={submitHandeker}>Submit</button>
                    {/if}
                </div>
            </div>
            <div style="margin-top: 10px;">
                <span style="color: deeppink; font-size: 20px;">{accountexists ?? ''}</span>
                <Link to="/login">Already have an account</Link>
            </div>
        </div>
    </div>
</div>

</main>

<style>

:root{
    --emoji : ''
}

* {
    color: white;
}

.emoji{
    height: 150px;
    width: 150px;
    background-image: var(--emoji);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100px;
    transition: ease-in-out 0.3s;
}

label{
    color: black;
}

input{
    color: black;
}

.regForm{
    height: 100vh;
    background-image: url('/public/icons/regbackground.jpg');
    background-position: center center; /* Center the image horizontally and vertically */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    background-size: cover; /* Resize the image to cover the entire element */
    position: relative; /* Set the position to relative to position the child elements */
    z-index: 1; /* Set a higher z-index for the child elements */
    background-color: rgba(35, 34, 35, 0.8);
}

.regForm::before {
  content: ''; /* Add an empty content to the pseudo-element */
  position: absolute; /* Set the position to absolute to position the pseudo-element */
  top: 0; /* Position the pseudo-element at the top of the element */
  left: 0; /* Position the pseudo-element at the left of the element */
  width: 100%; /* Set the width to 100% to cover the entire element */
  height: 100%; /* Set the height to 100% to cover the entire element */
  background-color: rgba(35, 34, 36, 0.8); /* Set the opacity of the pseudo-element */
  z-index: -1; /* Set a lower z-index for the pseudo-element to position it behind the child elements */
}

#regLeft{
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

#regRight{
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.expenseTrackerIcon{
    height: 200px;
    width: 200px;
    background-image: url('/public/icons/money-investment.gif');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 100px;
    box-shadow: 0px 0px 10px 1px;
}

.regBody{
    width: 80%;
    height: 80%;
    min-width: 500px;
    min-height: 750px;
    box-shadow: 0px 0px 10px 1px;
    border-radius: 25px;
    background-color: white;
    opacity: 0.8;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.userInfo{
    margin-top: 20px;
}

</style>