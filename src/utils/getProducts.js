import { items } from "../mock/mockData";


export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      const product = items.find((item) => item.id === parseInt(id));
      setTimeout(() => {
        if (product) {
            resolve(product);
        } else {
          reject("No se encontro el producto");
        }
      }, 1500);
    });
}