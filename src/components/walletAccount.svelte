<script>
import {fetchDynamic,getDecryptedCookie } from '../Script/Script';
import Cookies from 'js-cookie';
import {setAlert} from '../store/alert-store.js';
import Alerts from "../components/alerts.svelte";
export let wallet_id,ammount,wallet_name,wallet_colour,wallet_icon,currency_type_lid,currency_name;


let currencyIcon;
if(currency_type_lid){
    currencyIcon = '&#x20b9;';
}


let walletAmmount = true;
let saveAmmountNot = true;
let colourInput = true;
let saveColourNot = true;


function changeAmmount(){
    console.log('Account Change Requested');
    saveAmmountNot = false;
    walletAmmount = false;
}

async function saveAmmount(){
    walletAmmount = true;
    saveAmmountNot = true;

    try{
        if(Cookies.get('expenseTracker')){
                const obj = getDecryptedCookie('expenseTracker');
                
                if(obj != null){
                    obj.ammount = ammount;
                    obj.wallet_id = wallet_id;
                    let data = await fetchDynamic('/update-wallet-ammount','POST',obj);

                    if(data.roeCount == 1){
                        setAlert.update((data) => {
                            data.isOpen = true,
                            data.alertType = 'success',
                            data.alertmsg = 'The Ammount has been Updated Successfully'
                            return data;
                        });

                    }else{
                        setAlert.update((data) => {
                            data.isOpen = true,
                            data.alertType = 'error',
                            data.alertmsg = 'You can try after some time'
                            return data;
                        });

                    }
                    
                }
                
            }
    }catch(err){
        setAlert.update((data) => {
            data.isOpen = true,
            data.alertType = 'error',
            data.alertmsg = 'Oops, Somthing went wrong !'
            return data;
        });

    }

}

function changeColour(){
    colourInput = false;
    saveColourNot = false;
}

async function saveColour(){
    colourInput = true;
    saveColourNot = true;

    try{
        if(Cookies.get('expenseTracker')){
                const obj = getDecryptedCookie('expenseTracker');
                if(obj != null){
                    obj.wallet_colour = wallet_colour;
                    obj.wallet_id = wallet_id;
                    let data = await fetchDynamic('/update-wallet-colour','POST',obj);
                }
                
            }
    }catch(err){
        setAlert.update((data) => {
            data.isOpen = true,
            data.alertType = 'error',
            data.alertmsg = 'Oops, Somthing went wrong !'
            return data;
        });

    }

}

</script>

<main>

<div class="walletAccountDiv" data-walletId={wallet_id} style="background-color: {wallet_colour};">
    <div class="walletAccountHead">
        <div class="walletAccountLogo">
            <img src={wallet_icon} alt="CASH">
        </div>
        <div class="walletAccountName">
            <h4>{wallet_name}</h4>
        </div>
    </div>
    <div class="walletAccountMoney">
        <h1><input id="walletAmmount" type="number" bind:value={ammount} disabled={walletAmmount}/></h1><h3> {currency_name} </h3>
    </div>
    <div class="walletAccountSetting">
        <b id="save" class:d-none={saveAmmountNot} on:click={saveAmmount} style="cursor: pointer;">&#9745;</b>
        <b id="changeAmmount" on:click={changeAmmount} title="Change Ammount" style="cursor: pointer;">&#9881;</b>
        <b id="changeColour" on:click={changeColour} title="Change Colour" style="cursor: pointer;">&#10020;</b>
        <b><input type="color" class:d-none={colourInput} bind:value={wallet_colour} style="width: 15px; height: 15px;"></b>
        <b id="save" class:d-none={saveColourNot} on:click={saveColour} style="cursor: pointer;">&#9745;</b>
    </div>

</div>

</main>

<style>

:root{
    --walletColor : white;
}

input{
    width: 250px;
    height: 100%;
    text-align: center;
    background-color: inherit;
    border: 0;
    color: black;
}

.walletAccountDiv{
    height: 150px;
    width: 330px;
    border-radius: 20px;
}

.walletAccountHead{

    display: flex;
    width: 100%;
    height: 50px;
}

.walletAccountLogo{
    width: 25%;
    height: 100%;
}

.walletAccountLogo img{
    margin-left: 15px;
    width: 50px;
    height: 100%;
}

.walletAccountName{
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
}

.walletAccountMoney{
    width: 330px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.walletAccountSetting{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>