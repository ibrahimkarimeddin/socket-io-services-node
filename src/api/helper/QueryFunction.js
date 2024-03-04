const { fetchFn } = require("./axios");



async function  QueryFunction(url , params ={}){

        try {
          const response = await fetchFn.get(url, { params });
          
          // Handle successful response here
          // console.log('Response data:', response.data);
          
          return response.data; // You can return the data or process it further
        } catch (error) {
          if (error.response) {
            return {
                message:error.response.data.message ,
                status:error.response.status,
                
            }
        }
        

            return {
                message:null ,
                status:501
            }
          // Handle other errors as needed
        //   throw error; // You can choose to re-throw the error or handle it differently
        }
      
      
}

module.exports = {QueryFunction}