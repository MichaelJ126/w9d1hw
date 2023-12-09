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

    }
}