import { items } from "../mock/guitarras";


export const getProducts = (category) => {

  let filteredItems = [...items]

  if (category) {
    filteredItems = items.filter((item) =>
      item.color.includes(category)
    );
  }

  return new Promise((resolve, reject) => {
    if (items.length > 0) {
      setTimeout(() => {
        resolve(filteredItems);
      }, 1500);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

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


//MEJORA DEL MANEJO DE URL