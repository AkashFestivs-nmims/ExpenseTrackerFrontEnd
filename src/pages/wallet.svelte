<script>
import WalletAccount from './../components/walletAccount.svelte';
import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";


</script>

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
            <h2>500 &#x20b9;</h2>
        </div>
    </div>
    <div class="walletBody">
        <WalletAccount />
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

.walletDiv{
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
    padding: 10px;
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