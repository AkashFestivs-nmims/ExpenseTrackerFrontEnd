<script>
import Header3 from "./header3.svelte";
import SideBar from "./sideBar.svelte";
import {fetchDynamic,getDecryptedCookie } from '../Script/Script';
import Cookies from 'js-cookie';
import { onMount } from "svelte";
import {setAlert} from '../store/alert-store.js';
import Alerts from "../components/alerts.svelte";

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

let file;
let picColour;

function showImage(e){
    console.log(e.target.files[0].type.startsWith('image/'));
    if(!e.target.files[0].type.startsWith('image/')){
        setAlert.update((data) => {
            data.isOpen = true,
            data.alertType = 'warning',
            data.alertmsg = 'Only images are allowed'
            return data;
        });
    } 
    file = window.URL.createObjectURL(e.target.files[0]);
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

</style>