import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000';
const key = 'koGhM1FeahNCWXGSiNfiQ6PPtTsJcR8YfDxWxcunMZREoR7MKQ9daf/su69VCruuxUMt3/SZO4f4fC1JCoIS7jWcXjDbYFwVeZRLsV/U9xF65+VTstcvzbTpAFDE+6CBsT4oR6jR+McIdTtl6rF6Wt2BaT1CdDoxkXLESoAhde/tPkpv3vSe+y7kWMWHyuJdUp3V8Pb1uDSwP1UjGUW9rCijvw/F+IWaPhJfqVeglkClIiyjtW04uuya7LiQE6RlH9SU3SUkAqUAsXrVgnNg+1ct5uxn1nbV2dbxsclOzI4NmZSWVv+od/XZ446SXX73QBVUvqaHLIWl9TUN3JZJRg=='

console.log('API_URL', API_URL);
export function fetchDynamic(url, method, data) {
    return new Promise(async (resolve, reject) => {
        try {

            const response = await fetch(API_URL+url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                return resolve(await response.json());
            } else {
                return reject(await response.json())
            }
        } catch (error) {
            reject(error)
        }
    })
}


export function setEncryptedCookie(cookieName, cookieValue) {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(cookieValue), key);
  Cookies.set(cookieName, encrypted.toString(), { expires: 1, secure: true, sameSite: 'strict' });
  return [key.toString()]; // return the key as an array with one element
}

export function getDecryptedCookie(cookieName) {
    const encryptedCookie = Cookies.get(cookieName);
    const decrypted = CryptoJS.AES.decrypt(encryptedCookie, key);
    const decryptedValue = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return decryptedValue;

}

export function destroyCookie(cookieName) {
  Cookies.remove(cookieName);
}