import { writable,readable } from "svelte/store";
import {fetchDynamic, getDecryptedCookie} from "../Script/Script";
import Cookies from 'js-cookie';
import { navigate } from 'svelte-routing';



let dashboardCompObj;

export const sideBarComp = writable({

    dashboardCompObj : ''

});


if(Cookies.get('expenseTracker')){

    try{

        const myCookie = getDecryptedCookie('expenseTracker');

        if(myCookie != null){
            let dashBoardCompObjFromDB =await fetchDynamic('/get-dashboard-comp','POST',myCookie)
            
            sideBarComp.update((data) => {
                
                data.dashboardCompObj = dashBoardCompObjFromDB;
                return data;
            });
        }
    }catch(err){
        
        navigate('/login');
    }
}






