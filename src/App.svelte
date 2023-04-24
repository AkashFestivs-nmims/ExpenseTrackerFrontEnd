<script>
	import Header3 from './components/header3.svelte';
	import Login from './pages/login.svelte';
	import Credit from './pages/credit.svelte';
    import {Router, Route, Link, navigate} from 'svelte-routing';
    import Modal from "./components/modal.svelte";
    import Dashboard from './pages/dashboard.svelte';
    import Debit from './pages/debit.svelte';
    import SideBar from './components/sideBar.svelte';
    import TheamDashboad from './pages/theamDashboad.svelte';
    import FullTransactionList from './pages/fullTransactionList.svelte';


</script>

<Modal />

<Router>
    <nav>
        <Link to='/dashboard'></Link>
    </nav>
        <Route path='/theamDashboard'><TheamDashboad /></Route>
        <Route path='/dashboard'><Dashboard /></Route>
        <Route path='/credit'><Credit /></Route>
        <Route path='/debit'><Debit /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/fullTransactionList'><FullTransactionList /> </Route>
</Router>
