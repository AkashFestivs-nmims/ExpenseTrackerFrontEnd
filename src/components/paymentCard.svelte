<script>
import { Link } from "svelte-routing";
import { isTeamModalopen } from "../store/theamModalStore";


let paymentViewObj = [{'name':'Electcicity','icon':'/public/paymenyCardIcons/electricityBill.png'},{'name':'MobileRecharge','icon':'/public/paymenyCardIcons/recharge.png'},
                    {'name':'Gas','icon':'/public/paymenyCardIcons/gas.png'}]


function handleClick(type,icon){
    isTeamModalopen.set({
        isOpen : true,
        icon:icon,
        type:type
    })
}
</script>

<div class="paymentCard">
    {#each paymentViewObj as obj}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="paymentCircle" on:click={() => handleClick(obj.name,obj.icon)} title="{obj.name}">
                <img src={obj.icon} alt={obj.name} />
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
    display: flex;
}

.paymentCircle img{
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