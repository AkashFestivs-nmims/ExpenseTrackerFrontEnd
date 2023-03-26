<script>
	import Login from './pages/login.svelte';
	import Credit from './pages/credit.svelte';
    import {Router, Route, Link, navigate} from 'svelte-routing';
    import Modal from "./components/modal.svelte";
    import Dashboard from './pages/dashboard.svelte';
    import Debit from './pages/debit.svelte';


</script>

<Modal />

<Router>
    <nav>
        <Link to='/dashboard'></Link>
    </nav>
    
        <Route path='/dashboard'><Dashboard /></Route>
        <Route path='/credit'><Credit /></Route>
        <Route path='/debit'><Debit /></Route>
        <Route path='/login'><Login /></Route>
</Router>
