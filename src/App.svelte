<script>
import AddPaymentType from './pages/addPaymentType.svelte';
import Register from './pages/register.svelte';
import ErrorPage from './pages/errorPage.svelte';
import UpdateProfile from './pages/updateProfile.svelte';
import Login from './pages/login.svelte';
import Credit from './pages/credit.svelte';
import {Router, Route, Link, navigate} from 'svelte-routing';
import Dashboard from './pages/dashboard.svelte';
import Debit from './pages/debit.svelte';
import TheamDashboad from './pages/theamDashboad.svelte';
import FullTransactionList from './pages/fullTransactionList.svelte';
import Cookies from 'js-cookie';
import { isTeamModalopen } from './store/theamModalStore';
import TheamModal from './components/theamModal.svelte';
import Loder from './components/loder.svelte';
    import { isLoder } from './store/loder-store';

let path = window.location.pathname;

// if(!Cookies.get('expenseTracker') && path != '/registerUser'){
//     navigate('/login');
// }else if(path != '/registerUser'){
//     navigate('/theamDashboard');
// }





</script>
{#if $isTeamModalopen.isOpen}
    <TheamModal />
{/if}

{#if $isLoder}
    <Loder />
{/if}



<Router>
    <nav>
        <Link to='/dashboard'></Link>
    </nav>
        <Route path ='/loder'><Loder /></Route>
        <Route path='/addPaymentType'><AddPaymentType /></Route>
        <Route path='/registerUser'><Register /></Route>
        <Route path='/theamDashboard'><TheamDashboad /></Route>
        <Route path='/dashboard'><Dashboard /></Route>
        <Route path='/credit'><Credit /></Route>
        <Route path='/debit'><Debit /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/updateProfile'><UpdateProfile /> </Route>
        <Route path='/fullTransactionList'><FullTransactionList /> </Route>
        <Route path='*'><ErrorPage /> </Route>
        
</Router>
