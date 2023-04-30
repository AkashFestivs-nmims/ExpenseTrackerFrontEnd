import { writable,readable } from "svelte/store";
import {fetchDynamic, getDecryptedCookie} from "../Script/Script";


let dashboardCompObj;

export const sideBarComp = writable({

    dashboardCompObj : ''

});

const myCookie = getDecryptedCookie('expenseTracker');

console.log('cookie Data in sideBar : '+myCookie);
if(myCookie != null){
    let dashBoardCompObjFromDB =await fetchDynamic('/get-dashboard-comp','POST',myCookie)
    
    sideBarComp.update((data) => {
        
        data.dashboardCompObj = dashBoardCompObjFromDB;
        return data;
    });
}






