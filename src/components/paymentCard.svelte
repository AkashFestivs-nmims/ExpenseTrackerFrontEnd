<script>
// @ts-nocheck

import { Link } from "svelte-routing";
import { isTeamModalopen } from "../store/theamModalStore";
import {fetchDynamic,getDecryptedCookie} from "../Script/Script";
import Cookies from 'js-cookie';
    import { onMount } from "svelte";


// let paymentViewObj = [{'name':'Electcicity','icon':'/public/paymenyCardIcons/electricityBill.png'},{'name':'MobileRecharge','icon':'/public/paymenyCardIcons/recharge.png'},
//                     {'name':'Gas','icon':'/public/paymenyCardIcons/gas.png'}]

let paymentViewObj = '';


function handleClick(type,icon,accountTypeLid,receiverLid){
    isTeamModalopen.set({
        isOpen : true,
        icon:icon,
        type:type,
        accountTypeLid:accountTypeLid,
        receiverLid : receiverLid
    })
}

onMount(async () => {

    if(Cookies.get('expenseTracker')){
        const myCookie = getDecryptedCookie('expenseTracker');
        if(myCookie != null){
            try{
                let data = await fetchDynamic('/get-user-paymnet-type','POST',myCookie);
                console.log('UserPaymnet Type data : ',data);
                paymentViewObj = data;
            }catch (err) {
                console.log('Error in logout : ',err)
            }
        }
    }

});

</script>

<div class="paymentCard">
    {#each paymentViewObj as obj}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="paymentCircle" on:click={() => handleClick(obj.payment_name,obj.payment_icon,obj.account_type_lid,obj.paymnet_type_id)} title="{obj.payment_name}" data-paymnetType={obj.paymnet_type_id} data-userPaymentType={obj.user_payment_id}>
                <img src={obj.payment_icon} alt={obj.payment_name} />
            </div>
    {/each}
    <Link to="/addPaymentType">
        <div class="paymentCircle" title="add">
            <img src="/public/icons/plus-button.png" alt="Add">
        </div>
    </Link>
</div>


<style>

.paymentCard{
    height: 120px;
    min-width: 680px;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.paymentCircle{
    width: 100px;
    height: 100px;
    border-radius: 20px;
}

.paymentCircle img{
    height: 100%;
    width: 100%;
    align-self: center;
    width: 100%;
    border-radius: 50px;

}

.paymentCircle:hover{
    box-shadow: 0px 0px 5px 1px #B5C2C9;
    width: 100px;
    height: 100px;
    border-radius: 40px;
}

.paymentCircle:hover::after {
  content: attr(title);
  z-index: 999999999999;
  color: rgb(120,163,174);
  background-color: #EBFBFE;
  height: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0.5px blue;
  text-align: center;
  padding: 0;
  margin: 0;
}


</style>