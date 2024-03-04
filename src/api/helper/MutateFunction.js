const { fetchFn } = require("./axios");



async function  MutationFunction(url , data ={}){

        try {
          const response = await fetchFn.post(url, data);
          
        // console.log('Response data:', response.data);
          
          return response.data; 
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
          
        }
      
      
}

module.exports = {MutationFunction}