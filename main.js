class productManager {
    constructor(){
        this.products = [];
        this.lastId = 0;
    }
    addProduct(title , description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los datos son obligatorios para agregar un producto.");
        } else {
            const productExists = this.products.some(product => product.code === code);
            if (productExists) {
                console.error("Ya existe un producto con el mismo código.");
            } else {
                const producto = {id: this.lastId + 1, title, description, price, thumbnail, code, stock };
                this.lastId++;
                this.products.push(producto);
            }
        }
    }
    getProducts(){
        return this.products;
    }
    getProductById(lastId){
        const findId = this.products.find(x => x.id === lastId);
        if(findId == undefined){
            console.log('El ID no existe')
        }else{
            console.log(findId);
        }
    }
}
const us = new productManager();
us.addProduct('Agua', 'Mineral', '$4', 'png', '2011', 'Available');
us.addProduct('Leche', 'Entera', '$8', 'png', '2015', 'Available');
us.addProduct('Leche', 'Entera', '$8', 'png', '2014', 'Available');
us.addProduct('Agua', 'Mineral', '$4', 'png', '2013', 'Available');
us.getProductById(3)