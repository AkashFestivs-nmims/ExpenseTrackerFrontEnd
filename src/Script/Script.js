

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