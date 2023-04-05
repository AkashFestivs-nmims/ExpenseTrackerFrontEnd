<script>
    import Header3 from "../components/header3.svelte";
    import ListTransactionCard from "../components/listTransactionCard.svelte";
    import PaymentCard from "../components/paymentCard.svelte";
    import SideBar from "../components/sideBar.svelte";
    import TheamGraph1 from "../components/theamGraph1.svelte";


    


</script>

<SideBar />
<Header3 />

<main>
    <PaymentCard />
    <ListTransactionCard />
    <section class="d-flex">
        <div class="col-md-6 col-sm-12 d-flex justify-content-start">
            <TheamGraph1 />
        </div>
        <div class="col-md-6 col-sm-12 d-flex justify-content-end">
            <TheamGraph1 />
        </div>
    </section>
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

</style>