export class CartContext {
    constructor() {
        this.cart = []
        this.listeners = []
        this.products = []
        this.filterProducts = []
        this.selectedCategory = ""
    }

    addProduct(product) {
        if (this.checkIterate(product)) {
            console.log(`Product already in the cart: ${product.id}`)
            this.addQuantity(product.id)
            this.multiply(product.id)
            this.updateQuantity()
            return
        }
        this.cart.push(product)
        this.cart.find(item => item.id === product.id).quantity = 1
        this.cart.find(item => item.id === product.id).multiply = 1
        this.multiply(product.id)
        console.log(`addProduct activated /id:${product.id}`)
        this.notifyListeners()
    }


    checkIterate(product) {
        for (const item of this.cart) {
            if (item.id === product.id) {
                return true;
            }
        }
        return false;
    }

    addQuantity(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        product.quantity++
        this.multiply(id)
        this.notifyListeners()
        console.log(`ADD${product.quantity}`)
    }

    substractQuantity(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        if (product.quantity > 0) {
            product.quantity--
            this.multiply(id)
            this.notifyListeners()
            console.log(`SUB${product.quantity}`)
            return
        }
        product.quantity = 0
        this.multiply(id)
        this.notifyListeners()
    }

    updateQuantity() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.quantity
        })
        console.log(`sumup items:${total}`)
        return total
    }
    // Can also do it at frontend, using reduce method  (because we only pull data from the array)

    multiply(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        product.multiply = product.quantity * product.price
        console.log(`product-multiply: ${product.multiply}`)
    }

    updateSubTotal() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.multiply
        })
        console.log(`subtotal:${total}`)
        return total
    }
    // Can also do it at frontend, using reduce method (beccause we only pull data from the array)

    removeProduct(id) {
        const productId = id
        this.cart = this.cart.filter(item => item.id !== productId)
        this.notifyListeners()
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.updateQuantity()
        this.updateSubTotal()
        console.log(`Total Item:${this.updateQuantity}`)
        this.listeners.forEach(listener => listener(this.cart))
    }


    selectCategory(inputcategory) {
        if (inputcategory === "viewAll" || inputcategory == null || inputcategory == undefined) {
            this.filterProducts = this.products
        } else {
            this.filterProducts = this.products.filter(product => product.category === inputcategory)
        }
    }
}