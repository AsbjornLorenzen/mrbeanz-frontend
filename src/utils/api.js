export async function fetchBeanData(coffeeid) {
    try {
      const endpoint = 'http://localhost:5000/getbeanz/' + coffeeid.toString();
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) 
    {
      console.error('Error:', error);
      throw new Error('Failed to fetch bean data from the backend');
    }
}

export async function postBeanRating(rating) {
  try {
    const endpoint = 'http://localhost:5000/ratebeanz';
    const response = await fetch(
      endpoint, 
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(rating),
    })
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function queryBeans(roasteries,farms,vendors) {
  const queryBody = {
    'roasteries': roasteries,
    'farms': farms,
    'vendors': vendors
  }
  try {
    const endpoint = 'http://localhost:5000/querybeanz'
    const response = await fetch(
      endpoint, 
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(queryBody),
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error:', error);
    return [];
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