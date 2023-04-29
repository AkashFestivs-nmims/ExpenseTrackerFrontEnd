

const API_URL = 'http://localhost:5000';
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

export function getCookie(name) {
    const cookieString = document.cookie;
    console.log('cookie string:', cookieString);
    const cookies = cookieString.split(';');
    console.log('cookies:', cookies);
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      console.log('cookie:', cookie);
      if (cookie.startsWith(name + '=')) {
        console.log('cookie value:', cookie.substring(name.length + 1, cookie.length));
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    console.log('no matching cookie found');
    return null;
  }

export function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  
  