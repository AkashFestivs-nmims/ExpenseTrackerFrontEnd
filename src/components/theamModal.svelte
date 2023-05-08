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

    {#if $isTeamModalopen.type == 'add'}

    <div class="addPaynmetMethodDiv">
        <h3>Add Payment Type</h3>
        <div class="newPaynmetTypeIcon">
            <input type="file" name="" id="">
        </div>
        <div class="paynmetTypeNameDiv">
            <label for="paynmetTypeName">Payment Type Name :</label>
            <input type="text" id="paynmetTypeName"><br>
            <label for="paynmetTypeDiscription" style="margin-top: 10px;">Payment Type Discription </label>
            <input type="text" class="form-control" id="paynmetTypeDiscription">
        </div>
        <div class="divPaymentTypeSubmit">
            <button class="btn btn-info">Submit</button>
        </div>
    </div>

    {:else}

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
        
    {/if}
</div>



</main>

<style>
main{
    position: fixed;
    inset: 0;
    z-index: 9999999999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.addPaynmetMethodDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
}

.theamModalBody{
    padding: 10px;
    position: absolute;
    margin: auto;
    min-width: 550px;
    min-height: 450px;
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

.newPaynmetTypeIcon{
    height: 200px;
    width: 200px;
    box-shadow: 0px 0px 10px 1px;
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>