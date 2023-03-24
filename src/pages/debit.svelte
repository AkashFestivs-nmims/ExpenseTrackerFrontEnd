<script>
    import Account from '../components/Account.svelte';
    import Footer from '../components/footer.svelte';
	import Header1 from './../components/header1.svelte';

    let objArray = [{'amount':'480' , 'imgUrl': '/icons/electricity.jpg','accountType':'Electricity','type':'usage'},{'amount':'198' , 'imgUrl': '/icons/mobilerecharge.png','accountType':'Mobile Services','type':'usage'}]
</script>

<Header1 />
    <main>
        <div class="row">

            {#each objArray as obj}
                <div class="col-md-2 d-flex justify-content-center p-3">

                    <Account type={obj.type} amount={obj.amount} imgUrl={obj.imgUrl} accountType={obj.accountType}/>

                </div>
            {/each}


    </div>
    </main>
<Footer />