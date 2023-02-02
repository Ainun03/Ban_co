import http from '../../http-common';
import axios from 'axios';

const getAllProduct = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
};
const productService ={
    getAllProduct,
}
export default productService;