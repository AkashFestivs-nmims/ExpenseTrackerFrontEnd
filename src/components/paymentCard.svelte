<script>
    import { each } from "svelte/internal";


let paymentViewObj = [{'name':'Electcicity','icon':'icons/logo/electricity.jpg'},{'name':'MobileRecharge','icon':'icons/logo/mobileRecgarge.jpg'},
                    {'name':'Gas','icon':'icons/logo/gas.jpg'}]


</script>

<div class="paymentCard">
    {#each paymentViewObj as obj}
        <div class="paymentCircle">
            <img src={obj.icon} alt={obj.name} />
        </div>
    {/each}
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



</style>