<script>

export let wallet_id,ammount,wallet_name,wallet_colour,wallet_icon,currency_type_lid;


let currencyIcon;
if(currency_type_lid == 1){
    currencyIcon = '&#x20b9;';
}


let walletAmmount = true;
let saveAmmountNot = true;
let colourInput = true;
let saveColourNot = true;
$: document.documentElement.style.setProperty("--walletColor", wallet_colour);


function changeAmmount(){
    console.log('Account Change Requested');
    saveAmmountNot = false;
    walletAmmount = false;
}

function saveAmmount(){
    walletAmmount = true;
    saveAmmountNot = true;

}

function changeColour(){
    colourInput = false;
    saveColourNot = false;
}

function saveColour(){
    colourInput = true;
    saveColourNot = true;
}

</script>

<main>

<div class="walletAccountDiv" data-walletId={wallet_id}>
    <div class="walletAccountHead">
        <div class="walletAccountLogo">
            <img src={wallet_icon} alt="CASH">
        </div>
        <div class="walletAccountName">
            <h4>{wallet_name}</h4>
        </div>
    </div>
    <div class="walletAccountMoney">
        <h1><input id="walletAmmount" type="number" value={ammount} disabled={walletAmmount}/>  {@html currencyIcon}</h1>
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
    background-color: var(--walletColor);
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