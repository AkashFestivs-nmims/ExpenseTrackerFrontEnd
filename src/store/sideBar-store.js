import { writable,readable } from "svelte/store";
import {fetchDynamic, getDecryptedCookie} from "../Script/Script";
import Cookies from 'js-cookie';


let dashboardCompObj;

export const sideBarComp = writable({

    dashboardCompObj : ''

});


if(Cookies.get('expenseTracker')){
    
    const myCookie = getDecryptedCookie('expenseTracker');

    console.log('cookie Data in sideBar : '+myCookie);
    if(myCookie != null){
        let dashBoardCompObjFromDB =await fetchDynamic('/get-dashboard-comp','POST',myCookie)
        
        sideBarComp.update((data) => {
            
            data.dashboardCompObj = dashBoardCompObjFromDB;
            return data;
        });
    }
}






