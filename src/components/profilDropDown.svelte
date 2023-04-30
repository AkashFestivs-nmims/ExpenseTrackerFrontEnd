<script>
import { fade, blur, fly, slide, scale } from "svelte/transition";
import { user } from './../store/user-store.js';
import { Router, Link, navigate } from 'svelte-routing';
import {isProfilClick} from "../store/profileUpdate";
import { backInOut, bounceInOut, circInOut, cubicInOut, quadInOut, sineOut } from 'svelte/easing';
import {  } from "../Script/Script.js";

let range = '60%';

function closeDropDown(e) {
    isProfilClick.update((data) => {
        data.isOpen = false
       return data;
    })
}


let profilUpdate = [{'icon':'/svg/rupee.svg','title':'Profile','link':'/updateProfile','name':'Profile'},
                {'icon':'/svg/creditCard.svg','title':'Bank','link':'','name':'Bank Account'},
                {'icon':'/svg/group.svg','title':'Group','link':'','name':'My Peoples'}]

// function logOut(){
//     deleteCookie('myCookie');
//     navigate('/login')
// }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click={closeDropDown}>

<div class="profilDropDown" transition:slide={{delay: 50, duration: 800, easing: backInOut}} on:click|stopPropagation>
    <div class="profilDeatils">
        <div class="profilPic"></div>
        <div class="profilDetails">
            <h3>{$user.firstname + ' ' + $user.lastname}</h3>
                <div>
                    <b style="color: red; border: 1px solid red; border-radius: 5px; padding: 1px;">{$user.role}</b>
                </div>
                <div style="display: grid; justify-items: start; padding: 2px;">
                    <small><object data="/svg/mail.svg" title="Mail" style="width: 21px; height: 21px;"></object> {$user.email}</small>
                    <small><object data="/svg/location.svg" title="Location" style="width: 21px; height: 21px;"></object> {$user.address}</small>
                </div>
        </div>
    </div>
    <div class="dropDownContents">
        <div class="form-control d-flex justify-content-between" style="margin-top: 8px; align-items: center;">
            <object data="/svg/rupee.svg" title="sideBarButton" class="profilDropDownIcons"></object>
            <b>{range.split('%')[0]} </b>
            <div class="progressBar" style="--range:{range}"></div>
        </div>
        {#each profilUpdate as obj}
            <Link to={obj.link} class="link">
                <div class="dropDownBtn">
                    <object data={obj.icon} title={obj.title} style="width: 40px; height: 40px;"></object>
                    <b>{obj.name}</b>
                </div>
            </Link>
        {/each}
    </div>
    <hr>
    <div>
        <button class="btn btn-primary" > LogOut</button>
    </div>

</div>

</main>


<style>

:root{
    --range : 100%
}

main{
    position: fixed;
    inset: 0;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: start;
}

.profilDropDown{
    padding: 10px;
    position: absolute;
    margin: auto;
    min-width: 17%;
    min-height: 45%;
    box-shadow: 0px 0px 15px 1px;
    border: 10px;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-top: 8vh;
    margin-right: 1%;
}

.profilDeatils{
    height: 180px;
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: whitesmoke;

}

.profilPic{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid black;
    background-image: var(--profilUrl);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.profilDetails{
    display: grid;
    justify-items: start;
    margin-left: 10px;
}

.profilDropDownIcons{
    width: 29px;
    height: 29px;
}

.progressBar{
    width: var(--range);
    height: 7px;
    background: linear-gradient(to right,#FD8AAA, #AAFD8A);
    border-radius: 5px;
}

.dropDownBtn{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
}

.dropDownBtn:hover{
    box-shadow: 0px 0px 3px 1px;
    border-radius: 10px;
}

.dropDownContents{
    height: 210px;
    overflow-y: scroll;
}

</style>