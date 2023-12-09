let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMjA0OTEyMCwianRpIjoiNGVlYTJiYWQtNmMyMi00ZGQ4LWI5OTYtNTkzZTFkYjhiMGUxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkNhciBJbnZlbnRvcnkiLCJuYmYiOjE3MDIwNDkxMjAsImV4cCI6MTczMzU4NTEyMH0.v8jZS7aQrpOvYgHN96VIUV7AynzxIBqBF82zBIH1M8g"
let userId = localStorage.getItem('uuid') 





export const serverCalls = {

    getShop: async () => {
     
        const response = await fetch(`https://rangers-shop-of-horrors.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    },

getOrder: async () => {
    // api call consist of 1-4 things 
    // 1. url (required)
    // 2. method (optional it will default to GET)
    // 3. headers (optional but usually there) authentication type & type of data 
    // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
    const response = await fetch(`https://rangers-shop-of-horrors.onrender.com/api/order/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data'), response.status 
    }

    return await response.json()

},
createOrder: async (data: any) => { //come back to change any 
    // api call consist of 1-4 things 
    // 1. url (required)
    // 2. method (optional it will default to GET)
    // 3. headers (optional but usually there) authentication type & type of data 
    // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
    const response = await fetch(`https://rangers-shop-of-horrors.onrender.com/api/order/create/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${accessToken}`
        },
        body: JSON.stringify(data) //sending a string of our dictionary to our server 
    });

    if (!response.ok) {
        throw new Error('Failed to create data'), response.status 
    }

    return await response.json()

},
updateData: async (orderId: string, data: any) => { //change this from any 
    // api call consist of 1-4 things 
    // 1. url (required)
    // 2. method (optional it will default to GET)
    // 3. headers (optional but usually there) authentication type & type of data 
    // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
    const response = await fetch(`https://rangers-shop-of-horrors.onrender.com/api/order/update/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${accessToken}`
        },
        body: JSON.stringify(data) 
    });

    if (!response.ok) {
        throw new Error('Failed to update data'), response.status 
    }

    return await response.json()

},
deleteOrder: async (orderId: string, data: any) => {
    // api call consist of 1-4 things 
    // 1. url (required)
    // 2. method (optional it will default to GET)
    // 3. headers (optional but usually there) authentication type & type of data 
    // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
    const response = await fetch(`https://rangers-shop-of-horrors.onrender.com/api/order/delete/${orderId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to delete data'), response.status 
    }

    return await response.json()

}
}