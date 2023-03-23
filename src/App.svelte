<script>
    import {Router, Route, Link, navigate} from 'svelte-routing';
    import Modal from "./components/modal.svelte";
    import Dashboard from './pages/dashboard.svelte';


</script>

<Modal />

<Router>
    <nav>
        <Link to='/dashboard'></Link>
    </nav>
    
        <Route path='/dashboard'><Dashboard /></Route>
        <Route path='/credit'><Dashboard /></Route>
</Router>
