<script>
import WalletAccount from './../components/walletAccount.svelte';
import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";
import {fetchDynamic,getDecryptedCookie } from '../Script/Script';
import Cookies from 'js-cookie';
import {setAlert} from '../store/alert-store.js';
import Alerts from "../components/alerts.svelte";
import { walletList } from '../store/wallet-store';
import { Link } from 'svelte-routing';

let walletObj = [{"wallet_id" : "1" , "ammount" : "500" , "wallet_name" : "HARD CASH" , "wallet_colour" : "BLUE" ,"wallet_icon" : "/icons/money.png",
                    "currency_type" : "1"}];

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
{#if $setAlert.isOpen}
    <Alerts />
{/if}

<SideBar />
<Header3 />
<main>

<div class="walletDiv">
    <div class="walletHeaderDiv">
        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <div class="walletIcon"></div>
            <div><h2>Wallet</h2></div>
        </div>

        <div class="totalMoneyDiv">
            <h2>{$walletList.totalAmmount}</h2>
        </div>
    </div>
    <div class="walletBody">
        {#each $walletList.wallet as obj}
            <WalletAccount wallet_id={obj.wallet_id} ammount={obj.ammount} wallet_name={obj.wallet_name} wallet_colour={obj.wallet_colour} wallet_icon={obj.wallet_icon} currency_type_lid={obj.currency_type_lid} currency_name={obj.currency_name}/>
        {/each}
    </div>
    <Link to="/addNewAccount">
        <div class="addWalletDiv">
            <div class="addWalletBtn"></div>

        </div>
    </Link>
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

.walletDiv{
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
    padding: 10px;
}

.addWalletDiv{
    width: 100%;
    height: 150px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.addWalletDiv:active {
  transform: scale(0.95);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}

.addWalletBtn{
    height: 70px;
    width: 70px;
    background-image: url('/public/icons/add.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.walletHeaderDiv{
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.walletIcon{
    height: 70px;
    width: 70px;
    border-radius: 100px;
    background-position: center;
    background-size: cover;
    margin-left: 20px;
    background-image: url('/public/icons/gif/wallet.gif');

}

.walletBody{
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
}

.totalMoneyDiv{
    box-shadow: 0px 0px 10px 1px;
    height: 80%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
}

</style>