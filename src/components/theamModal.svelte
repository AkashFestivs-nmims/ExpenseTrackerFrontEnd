<script>
import { isLoder } from './../store/loder-store.js';
import { fade } from 'svelte/transition';
import {isTeamModalopen} from '../store/theamModalStore';
import { fileToBase64,fetchDynamic,getDecryptedCookie } from '../Script/Script';
import Cookies from 'js-cookie';
import { paymentTypeList } from '../store/paymentType-store';
import { walletList } from '../store/wallet-store.js';



function closeModal(e) {
    isTeamModalopen.update((data) => {
        data.isOpen = false
       return data;
    })
}

let imgsrc;
async function fileUpload(e){

    if(!e.target.files) return;

    function countTo100(delay) {


            for (let i = 0; i <= 100; i++) {
                setTimeout(function() {
                    document.documentElement.style.setProperty("--range", i+'%');
                    if(i == 100){
                    imgsrc = window.URL.createObjectURL(e.target.files[0]);
                    }
                }, i * delay);

            }
    }
    await countTo100(10)
}

let paynmetTypeDiscription,paynmetTypeName,paymentFile;

async function uploadPaymnetType(){

    isLoder.set(true);

    if(paynmetTypeName == null || paymentFile == null) return;

    let base64String = await fileToBase64(paymentFile.files[0]);

    if(Cookies.get('expenseTracker')){
        const obj = getDecryptedCookie('expenseTracker');

        obj.paynmetTypeName = await paynmetTypeName;
        obj.paynmetTypeDiscription = await paynmetTypeDiscription;
        obj.paymentFile = base64String;

        if(obj != null){

            let data = await fetchDynamic('/add-paynmet-type','POST',obj);

            console.log(data.upload[0]);
                const json = data.upload[0]
                console.log("data inserted : ",json)

                paymentTypeList.update((val) => {
                    return [json, ...val]
                })

                isTeamModalopen.update((data) => {
                data.isOpen = false
                return data;
                })


        }

    }

    isLoder.set(false);

}

//----------------------------------------------------------------------------------------------------------------------------------

$: {
    (async () => {

        if(Cookies.get('expenseTracker')){
            const obj = getDecryptedCookie('expenseTracker');
            
            if(obj != null){
                
                let list = await fetchDynamic('/get-user-wallet','POST',obj);
                console.log('list : ',list )
                walletList.set({
                    wallet : list[0].get_user_wallet.wallet,
                    totalAmmount : list[0].get_user_wallet.total_ammount.total_ammount
                });
                
            }
            
        }
    })()
}



</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main  on:click={closeModal}>

<div class="theamModalBody" transition:fade on:click|stopPropagation>

    {#if $isTeamModalopen.type == 'add'}

    <div class="addPaynmetMethodDiv">
        <h3>Add Payment Type</h3>
        <div class="fileUpload">
            <div class="newPaynmetTypeIcon">
                <img src={imgsrc} alt="Icon">
            </div>
            <div class="fileUploadInput">
                <div class="progressBar"></div>
                <input type="file" name="paymentIconFile" bind:this={paymentFile} id="paymentIconFile" on:change={fileUpload}>
            </div>
        </div>
        
        <div class="paynmetTypeNameDiv">
            <label for="paynmetTypeName">Payment Type Name :</label>
            <input type="text" id="paynmetTypeName" bind:value={paynmetTypeName}><br>
            <label for="paynmetTypeDiscription" style="margin-top: 10px;">Payment Type Discription </label>
            <input type="text" class="form-control" id="paynmetTypeDiscription" bind:value={paynmetTypeDiscription}>
        </div>
        <div class="divPaymentTypeSubmit">
            <button class="btn btn-info" on:click={uploadPaymnetType}>Submit</button>
        </div>
    </div>

    {:else}

        <div id="modalHead" data-userTypeLid={$isTeamModalopen.receiverLid} data-receiverLid={$isTeamModalopen.receiverLid}>
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
                <div class="selectBankDiv">
                    <select name="selectBank" id="selectBank" class="form-control">
                        <option value="0">-- Select --</option>
                        {#each $walletList.wallet as obj}
                            <option value={obj.wallet_id}> {obj.wallet_name}</option>
                        {/each}
                    </select>
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

:root{
    --range : 100%
}

.newPaynmetTypeIcon img{
    height: 100%;
    width: 100%;
}

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

.progressBar{
    width: var(--range);
    height: 7px;
    background: linear-gradient(to right,#FD8AAA, #AAFD8A);
    border-radius: 5px;
    margin-bottom: 10px;
}

.addPaynmetMethodDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
}

.fileUpload{
    display: flex;
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

#modalHead img{
    border-radius: 100px;
    width: 100%;
    height: 100%;
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

.selectBankDiv select option{
    
}
</style>