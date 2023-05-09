<script>
import { onMount } from "svelte";
import { isLoder } from "../store/loder-store";

let  dot ='';
onMount(() =>{
    setInterval(() =>{
        dot+='.';
        if(dot.length >5){
            dot = '';
        }
    },300)
})

</script>

<main>

    <div class="loder">
        <div class="loderimage"></div>
        <div class="loderText">
            <h3>Loding{dot}</h3>
        </div>
    </div>

</main>

<style>

main{
    position: fixed;
    inset: 0;
    z-index: 9999999999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

h3{
    font-size: 50px;
    font-variant-caps: all-small-caps;
}

.loderimage{
    width: 250px;
    height: 250px;
    border-radius: 300px;
    background-image: url('/public/icons/money-investment.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 10px 1px;
}

</style>