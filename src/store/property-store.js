import { writable } from "svelte/store";

export const property = writable({
    API_URL : 'http://localhost:5000',
    key : ''
})