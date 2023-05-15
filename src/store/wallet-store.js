import { writable } from "svelte/store";

export const walletList = writable({
    wallet : [],
    totalAmmount : ''
});