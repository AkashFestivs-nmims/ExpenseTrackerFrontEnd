<script>
    import CashAccount from "./components/cashAccount.svelte";
    import Footer from "./components/footer.svelte";
    import Header1 from "./components/header1.svelte";
    import Header from "./components/header.svelte";
    import Modal from "./components/modal.svelte";


     let objArray = [{'amount':'1000' , 'imgUrl': '/icons/blue1.jpg'},{'amount':'2000' , 'imgUrl': '/icons/lineblue.jpg'},{'amount':'3000' , 'imgUrl': '/icons/header.png'},{'amount':'4000' , 'imgUrl': '/icons/facebook.gif'}]

</script>




<Header1 />
<Modal />
<main>
    <div class="row">

            {#each objArray as obj}
                <div class="col-md-2 d-flex justify-content-center p-3">

                    <CashAccount amount={obj.amount} imgUrl={obj.imgUrl}/>

                </div>
            {/each}


    </div>
</main>
<Footer />




<style>



</style>
