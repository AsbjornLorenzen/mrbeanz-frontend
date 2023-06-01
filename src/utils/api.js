export async function fetchBeanData(coffeeid) {
    try {
      const endpoint = 'http://localhost:5000/getbeanz/' + coffeeid.toString();
      const response = await fetch(endpoint);
      const data = await response.json();
      return [data,data];
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch bean data from the backend');
    }
}


export async function userLogin(credentials) {
    try {
      const endpoint = 'http://localhost:5000/login';
      const response = await fetch(
        endpoint, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials),
      }).then(response => {
        if (response.ok) {
            console.log('Response was ',response)
            const res = response.json();
            return res;
        } else {
            return {success:false}
        }
      }) 
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to login');
    }
}