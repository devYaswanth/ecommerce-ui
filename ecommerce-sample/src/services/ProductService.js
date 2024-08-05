import HttpService from "./HttpService";

// const ProductService = {
//   getProducts: (qryStr, successCallback, errorCallback) => {
//     HttpService.getProducts(qryStr)
//       .then((res) => {
//         if (successCallback) successCallback(res.data); // Use res.data to get the response data
//       })
//       .catch((error) => {
//         if (errorCallback) errorCallback(error);
//       });
//   },
// };

// export default ProductService;


const ProductService = {
    getProducts: async () => {
        try {
            const response = await HttpService.get();
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    getProductById: async (id) => {
        try {
            const response = await HttpService.get(`/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    },
};

export default ProductService;
