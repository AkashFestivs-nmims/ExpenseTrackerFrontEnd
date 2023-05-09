<script>
import Header3 from "../components/header3.svelte";
import ListTransactionCard from "../components/listTransactionCard.svelte";
    import Loder from "../components/loder.svelte";
import PaymentCard from "../components/paymentCard.svelte";
import SideBar from "../components/sideBar.svelte";
import TheamGraph1 from "../components/theamGraph1.svelte";
import TheamModal from "../components/theamModal.svelte";
import { isTeamModalopen } from "../store/theamModalStore";




</script>

<SideBar />
<Header3 />

<main>

    <PaymentCard />
    <ListTransactionCard />
    <section>
            <div class="">
                <TheamGraph1 chartName=donutchart/>
            </div>
            <div class="">
                <TheamGraph1 chartName=chart_div/>
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

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
}

</style>