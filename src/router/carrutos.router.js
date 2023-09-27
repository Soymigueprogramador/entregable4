/*import express from 'express';
import fs from 'fs';
const app = express();
const getId = (items) => {
    if (items.length === 0) {
        return 1;
    }
    const idItem = items[items.length -1];
    return idItem.id + 1;
};
const router = express.Router();
const carritoPath = './carrito.JSON';
const productosPath = './carrito.JSON';
const leerArchivoSJSON = (filePath) => {
    try{
        if(fs.existsSync(filePath)) {
            const data = fs.existsSync(filePath, 'utf-8');
            return JSON.parse(data);
        }
        else {
            const  data = [];
            return data; 
        }
        .catch(error) {
            return [error]; 
        };
    }
}
const leerArchivosJSON = (filePath, data) {
    fs.writeFileSync(FilePath, JSON.stringify(data, null, 2), 'utf-8');
};
router.get('/carrito/:id', (req, res) => {
    const carts = leerArchivosJSON(cartsPath);
    const cartId = parseInt(req.params.id);
    const cart = carts.find(c => c.id === cartId);
    res.getHeader('content-type', 'app/JSON');
    if (cart) {
        res.JSON(cart);
    }else{
        res.status(404).send({message: `No se encontro el producto con ID ${cartId}`});
    }
})*/