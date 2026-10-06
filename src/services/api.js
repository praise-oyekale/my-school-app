
// const BASE_URL = "https://6aa171ed2703577aa1e3b2b5.mockapi.io/";


// export async function request(endpoint, options = {} ) {
//     try {
//         const response = await fetch(`${BASE_URL}${endpoint}`, options);
//         if(!response.ok){
//             throw new Error(`Request failed: ${response.status}`);
//         } 
//         return await response.json();
//     } catch (error) {
//         console.error("API Error:", error);
//         error
//     }
// }


// export async function post(userData) {
//     return request("/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData)
//     })
// }



// export async function get() {
//     return request("/users");
// }


// export async function remove(endpoint) {
//     return request(endpoint, {
//         method: "DELETE"
//     })
// }


