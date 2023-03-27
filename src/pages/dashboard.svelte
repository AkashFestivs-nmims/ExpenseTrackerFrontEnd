<script>
    import Account from "../components/Account.svelte";
    import DashboardGraph from "../components/dashboardGraph.svelte";
    import Footer from "../components/footer.svelte";
    import Graph from "../components/graph.svelte";
    import Header1 from "../components/header1.svelte";
    import List from "../components/list.svelte";





let objArray = [{'amount':'1000' , 'imgUrl': '/icons/blue1.jpg','accountType':'Cash','type':'account'},{'amount':'2000' , 'imgUrl': '/icons/lineblue.jpg','accountType':'Bank','type':'account'},{'amount':'5000' , 'imgUrl': '/icons/lineblue.jpg','accountType':'Mutual Funds','type':'account'},{'amount':'1000' , 'imgUrl': '/icons/blue1.jpg','accountType':'Gold','type':'account'}]


</script>
<Header1 />
<main>
        <div class="row mx-0">

            {#each objArray as obj}
                <div class="col-md-2 d-flex justify-content-center p-3">

                    <Account type={obj.type} amount={obj.amount} imgUrl={obj.imgUrl} accountType={obj.accountType}/>

                </div>
            {/each}


    </div>

    <div id="dashboardBody">
        <div class="row d-flex justify-content-evenly" style="">
            <div class="col-md-4"><Graph /></div>
            <div class="col-md-4"><DashboardGraph /></div>
            <div class="col-md-4"><List /></div>      
        </div>
    </div>

</main>
<Footer />

<style>

#dashboardBody{
    margin-left: 20px;
}

</style>