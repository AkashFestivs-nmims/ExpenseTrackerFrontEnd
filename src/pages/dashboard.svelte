<script>
    import Account from "../components/Account.svelte";
    import Footer from "../components/footer.svelte";
    import Header1 from "../components/header1.svelte";





let objArray = [{'amount':'1000' , 'imgUrl': '/icons/blue1.jpg','accountType':'Cash','type':'account'},{'amount':'2000' , 'imgUrl': '/icons/lineblue.jpg','accountType':'Bank','type':'account'}]


</script>
<Header1 />
<main>
    <div class="row">

            {#each objArray as obj,index (index)}
                <div class="col-md-2 d-flex justify-content-center p-3">

                    <Account type={obj.type} amount={obj.amount} imgUrl={obj.imgUrl} accountType={obj.accountType}/>

                </div>
            {/each}


    </div>
</main>
<Footer />