<script>
import {setAlert} from '../store/alert-store.js';
import { fade, blur, fly, slide, scale } from "svelte/transition";


let alertType = '';
let alertIcon = '';
let color = '';
let display = 'none';

if($setAlert.alertType == 'success'){
    alertType = 'Success !';
    alertIcon = '/icons/gif/correct.gif';
    color='green';
}else if($setAlert.alertType == 'error'){
    alertType = 'Error !';
    alertIcon = '/icons/gif/wrong.gif';
    color='red';
}else if($setAlert.alertType == 'warning'){
    alertType = 'Warning !';
    alertIcon = '/icons/gif/warning.gif';
    color = 'yellowgreen';
}

function closeAlert(){
    setAlert.update((data) => {
        data.isOpen = false
       return data;
    })

    console.log('function executing')
    if($setAlert.isOpen == true){
        display = 'flex';
    }else if($setAlert.isOpen == false){
        display = 'none';
    }
}




$ :console.log("Alert data : "+ $setAlert.isOpen);
$ :console.log("Display : "+ display);




</script>

<main>

    <div class="alertBox" transition:fly>
        <div class="alertIcon">
            <img src={alertIcon} alt="">
        </div>
        <div class="alertmsg">
            <b style="color: {color}; font-size: 28px;">{alertType}</b>
            <b class=msg>{$setAlert.alertmsg}</b>
        </div>
        <div class="alertbtn" style="cursor: pointer;" on:click={closeAlert}>
            <b> &#x2715</b>
        </div>
    </div>

</main>



<style>

main{
    position: fixed;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: end ;
    transition: ease-in-out 0.5s;
    transform: fade;
}

.alertBox{
    padding: 10px;
    width: 400px;
    height: 100px;
    box-shadow: 0px 0px 15px 1px;
    border: 10px;
    text-align: center;
    border-radius: 20px;
    margin-right: 15px;
    margin-bottom: 15px;
    background-color: white;
    display: flex;
    align-items: center;

}

.alertIcon{
    width: 100px;
    height: 80px;
}

.alertIcon img{
    width: 100%;
    height: 100%;
}

.alertmsg{
    width: 200px;
    height: 80px;
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
}

.alertbtn{
    width: 100px;
    height: 80px;
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.msg{
    word-break: normal;
    overflow: auto;
}

.alertbtn:hover{
    font-size: 25px;
}

</style>