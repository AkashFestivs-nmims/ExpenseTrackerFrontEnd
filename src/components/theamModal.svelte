<script>
import { fade } from 'svelte/transition';
import {isTeamModalopen} from '../store/theamModalStore'

function closeModal(e) {
    isTeamModalopen.update((data) => {
        data.isOpen = false
       return data;
    })
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main  on:click={closeModal}>

<div class="theamModalBody" transition:fade on:click|stopPropagation>
    <div id="modalHead">
        <img src="{$isTeamModalopen.icon}" alt="{$isTeamModalopen.type}"> 
        <b>{$isTeamModalopen.type}</b>
    </div>
    <div class="theamModalMain">
        <div class="theamModalMainBody">
            <div class="resentPayment">
                <div class="paymentAmmount">
                    <b style="font-size: 200%;">220 &#x20b9;</b>
                    <small><b style="background-color: #f7a9a9; border-radius: 8px;">Paid </b> 2023-04-25 16:53:47</small>
                </div>
                <div class="account">

                </div>
            </div>
        </div>
        <div class="theamModalSendMoney">
            <input type="number" class="form-control">
            <button class="btn btn-outline-primary" style="width: 80px; margin-left: 5px;"><object data="/svg/send.svg" title="sideBarButton" class="w-6 h-6"></object></button>
        </div>
    </div>
</div>


</main>

<style>
main{
    position: fixed;
    inset: 0;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.theamModalBody{
    padding: 10px;
    position: absolute;
    margin: auto;
    min-width: 35%;
    min-height: 45%;
    box-shadow: 0px 0px 15px 1px;
    border: 10px;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 20px;
}

#modalHead{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    display: flex;
}


.theamModalMainBody{
    height: 290px;
    overflow-y: scroll;
}

.theamModalSendMoney{
    display: flex;
    margin-top: 10px;
}

.w-6{
    width: 35px;
}
.h-6{
    height: 25px;
}

.resentPayment{
    margin-top: 4px;
    display: flex;
    justify-content: right;
}

.paymentAmmount{
    border: 1px solid;
    width: 200px;
    height: 80px;
    margin-right: 5px;
    border-radius: 10px;
    display: grid;
    justify-content: start;
    padding-left: 10px;
    justify-items: start;
}

.account{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid black;
    background-image: url('/icons/profilPic.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 5px;
}
</style>