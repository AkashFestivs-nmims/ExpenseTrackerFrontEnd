<script>
import Header3 from "./header3.svelte";
import SideBar from "./sideBar.svelte";
import {fetchDynamic,getDecryptedCookie,fileToBase64 } from '../Script/Script';
import Cookies from 'js-cookie';
import { onMount } from "svelte";
import {setAlert} from '../store/alert-store.js';
import Alerts from "../components/alerts.svelte";
import { Link,navigate } from "svelte-routing";
import { isLoder } from "../store/loder-store";

let currencyList = [];
onMount(async () =>{

if(Cookies.get('expenseTracker')){
    const obj = getDecryptedCookie('expenseTracker');
    
    if(obj != null){
        
        let list = await fetchDynamic('/currency-list','POST',obj);
        console.log('list : ',list );
        currencyList = list;
        
    }
            
}

});

let WalletName = '',ammount = '',walletIcon = '',currencyName = '',walletColour = '',AccountIcon,currencyTypeId;


function fileUpload(e){

    console.log('FIle : ',e.target.files[0].type);

    if(!e.target.files[0].type.includes('image')){
        setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'warning',
                data.alertmsg = 'Can Upload Images Only'
                return data;
        });
    }

    walletIcon = window.URL.createObjectURL(e.target.files[0]);

}

function currencyType(){
    const selectElement = document.getElementById('currencyType');
    // @ts-ignore
    const selectedOption = selectElement.selectedOptions[0];
    currencyName = selectedOption.dataset.currencyName;
}

async function addAccount(e){

    try{
        isLoder.set(true);

        let base64String = await fileToBase64(AccountIcon.files[0]);

        if(Cookies.get('expenseTracker')){
            const obj = getDecryptedCookie('expenseTracker');

            if(obj != null){

                obj.walletIcon =await base64String;
                obj.WalletName = WalletName;
                obj.ammount = ammount;
                obj.currencyTypeId = currencyTypeId;
                obj.walletColour = walletColour;
                let data = await fetchDynamic('/add-wallet','POST',obj);
                console.log('Add Wallet : ',data[0].add_wallet.status);


            }

        }

        isLoder.set(false);
        navigate('/wallet')
    }catch(err){
        setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'error',
                data.alertmsg = err[0].add_wallet.message
                return data;
        });
        isLoder.set(false);
    }
}

</script>
{#if $setAlert.isOpen}
    <Alerts />
{/if}
<SideBar />
<Header3 />
<main>

<div class="addNewAccountDiv">
    <div class="addAccountHeader">
        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <div class="addAccountIcon"></div>
            <div><h2>Add New Account</h2></div>
        </div>
    </div>

    <div class="walletDesign" style="background-color: {walletColour};">

        <div class="walletDesignHeader">
            <div class="walletIconDiv">
                <img src={walletIcon} alt="">
            </div>
            <div class="walletName">
                <h3>{WalletName}</h3>
            </div>
        </div>
        <div class="walletAmmountDiv">
            <h1>{ammount} {currencyName}</h1>
        </div>

    </div>

    <div class="walletDetails">
        <div class="row">
            <div class="col-md-4">
                <label for="accountName"><b> Account Name : </b></label>
                <input class="form-control" type="text" id="accountName" bind:value={WalletName}>
            </div>
            <div class="col-md-4">
                <label for="ammount"><b>Ammount : </b></label>
                <input class="form-control" type="number" id="ammount" bind:value={ammount}>
            </div>
            <div class="col-md-4">
                <label for="currencyType"><b>Currency : </b></label>
                <select class="form-control" name="currencyType" id="currencyType" on:change={currencyType} bind:value={currencyTypeId}>
                    <option value="0">-- SELECT --</option>
                    {#each currencyList as obj}
                        <option value={obj.id} data-currency-name={obj.currency_name}>{obj.currency_name}</option>
                    {/each}
                </select>
            </div>
        </div>
        <div class="row" style="margin-top: 50px;">
            <div class="col-md-4">
                <label for="walletIcon"><b> Wallet Icon : </b></label>
                <input class="form-control" type="file" id="walletIcon" on:change={fileUpload} bind:this={AccountIcon}/>
            </div>
            <div class="col-md-4">
                <label for="walletColour"><b> Wallet Colour : </b></label>
                <input class="form-control" type="color" bind:value={walletColour}>
            </div>
        </div>

        <div class="row" style="margin-top: 50px; text-align: end;">
            <div class="col-md-12" >
                <button class="btn btn-primary" style="width: 150px;" id="addAccount" on:click={addAccount}>Save</button>
                <Link to="/wallet"><button class="btn btn-info" id="close">Cancel</button></Link>
            </div>
        </div>
    </div>


</div>

</main>


<style>

main{
    min-width: calc(100% - var(--sideBarWidth));
    margin-top: 8vh;
    margin-left: var(--sideBarWidth);
    min-height: 92vh;
    padding: 30px;
    transition: ease-in-out 0.5s;
}



.addNewAccountDiv{
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
    padding: 10px;
    background-image: url('/public/icons/building.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

input{
    background-color: inherit;
}

.addAccountHeader{
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.addAccountIcon{
    height: 80px;
    width: 80px;
    border-radius: 100px;
    background-position: center;
    background-size: cover;
    margin-left: 20px;
    background-image: url('/public/icons/gif/bank.gif');
}

.walletDesign{
    height: 250px;
    width: 40%;
    border: 2px solid black;
    border-radius: 20px;
    margin-top: 15px;
    padding: 10px;
    margin-left: 28%;
}

.walletDetails{
    height: 350px;
    width: 100%;
    border: 2px solid black;
    border-radius: 20px;
    margin-top: 30px;
    padding: 10px;
}

.walletIconDiv{
    height: 100px;
    width: 100px;
}

.walletIconDiv img{
    height: 100%;
    width: 100%;
    border-radius: 100px;
    overflow: hidden;
}

.walletDesignHeader{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px
}

.walletAmmountDiv{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>