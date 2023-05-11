<script>
// @ts-nocheck
import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";
import { isTeamModalopen } from "../store/theamModalStore";
import {fetchDynamic,getDecryptedCookie } from '../Script/Script';
import Cookies from 'js-cookie';
import { paymentTypeList } from '../store/paymentType-store.js';
import {setAlert} from '../store/alert-store.js';
import Alerts from "../components/alerts.svelte";

let paymentTypeObj = '';
let searchChar = '';
function handleClick(){
    console.log("CLick")
    isTeamModalopen.set({
        isOpen : true,
        icon:null,
        type:'add'
    })
}
$: {
    (async () => {

        if(Cookies.get('expenseTracker')){
            const obj = getDecryptedCookie('expenseTracker');
            obj.char =  searchChar.toUpperCase();
            
            if(obj != null){
                
                let list = await fetchDynamic('/view-all-payment-type','POST',obj);
                paymentTypeList.set(list);
                
            }
            
        }
    })()
}

async function addPaymentTypeMapping(id){

    try{

        if(Cookies.get('expenseTracker')){
            const obj = getDecryptedCookie('expenseTracker');
            obj.Paymnet_type_id = id;
            if(obj != null){

                let data = await fetchDynamic('/add-payment-type-mapping','POST',obj);

                console.log(data);

                if(data.roeCount == 1){
                    setAlert.update((data) => {
                        data.isOpen = true,
                        data.alertType = 'success',
                        data.alertmsg = 'Item successfully added to your list'
                        return data;
            })
                }
            }
        }

    }catch(err){
        
        if(err.code == 409){
            setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'warning',
                data.alertmsg = 'You have this in your List!'
                return data;
            })
        }else{
            setAlert.update((data) => {
                data.isOpen = true,
                data.alertType = 'error',
                data.alertmsg = 'Oops ! Somthing went wrong.'
                return data;
            })
        }
    }
}

async function searchPaymnetType(){

}




</script>
{#if $setAlert.isOpen}
    <Alerts />
{/if}

<SideBar />
<Header3 />



<main>

<div class="paymentTypeDiv">
    <div class="" style="margin-top: 15px;">
        <div class="headLefttDiv" >
            <div class="addicon"></div>
            <h4>Add Payment Type</h4>
        </div>
        <div class="headRightDiv">
            <input type="text" class="form-control" bind:value={searchChar} on:input={searchPaymnetType}/>
            <button class="btn btn-info">Search</button>
        </div>
    </div>
    <div class="paymentTypeBody">
        {#each $paymentTypeList as obj}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="paymentTypeCicle" title={obj.payment_name} data-id={obj.id} on:click={addPaymentTypeMapping(obj.id)}>
                <img src={obj.payment_icon} alt="add">
            </div>
        {/each}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="paymentTypeCicle" title="mainAdd" data-id="0" on:click={handleClick}>
            <img src="/public/icons/add.png" alt="add">
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

.paymentTypeDiv{
    padding: 10px;
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
    display: flex;
    flex-direction: column
}

.addicon{
    height: 50px;
    width: 50px;
    border-radius: 100px;
    background-image: url('/public/icons/gif/addanimation.gif');
    background-position: center;
    background-size: cover;
    margin-left: 20px;

}

.headRightDiv{
    width: 40%;
    float: right;
    display: flex;
    gap: 15px;
}

.headLefttDiv{
    text-align: left;
    width: 60%;
    float: left;
    text-align: center;
    display: flex;
    text-align: center;
    gap: 20px;
    align-items: center;
}

.paymentTypeBody{
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
}

.paymentTypeCicle{
    width: 125px;
    height: 125px;
    box-shadow: 0px 0px 2px 1px;
    border-radius: 100px;
    align-items: center;
    display: grid;
    justify-content: center;
    place-items: center;
    overflow: hidden;
}

.paymentTypeCicle:active {
  transform: scale(0.95);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}

.paymentTypeCicle:focus {
  outline: none;
}

.paymentTypeCicle img{
    height: 90%;
    width: 90%;
}

</style>