
let products = [
    { id: '1', name: 'Adidas Sport Man', category: 'man', stock: '10', price: '2000', description: 'Be Sport, be just YOU', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/AOSY22021_bf362d67-0a72-4215-bf06-3db1314448eb_1728x.jpg?v=1671819442' },
    { id: '2', name: 'Citizen Steel Man', category: 'man', stock: '10', price: '4000', description: 'Inox Steel - Be yourself', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/AN805051M_a_062d8108-9167-44e5-b256-cda28f8ccb28_1728x.jpg?v=1657212417' },
    { id: '3', name: 'Adidas Quartz Chrono', category: 'man', stock: '10', price: '4000', description: 'Everyday get your time', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/AOSY22013_a4f36d41-b66c-4141-b7f4-20521344289a_1728x.jpg?v=1671820490' },
    { id: '4', name: 'Fossil Nate', category: 'man', stock: '10', price: '6000', description: 'Black is the new YOU', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/JR1356-3P-3_018fe1e1-2947-4e7b-88a8-26be1e54ed42_1728x.jpg?v=1650573512' },
    { id: '5', name: 'Adidas Quartz 3H', category: 'woman', stock: '10', price: '4000', description: 'Feel pretty, feel YOU', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/AOSY22028_c3ff1f0d-6a25-4bf9-8ab3-c1836048b1cd_1728x.jpg?v=1671820022' },
    { id: '6', name: 'Fossil ES4221', category: 'woman', stock: '10', price: '5000', description: 'Confortable, like you', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/ES4221_main_1728x.jpg?v=1644608940' },
    { id: '7', name: 'Puma Contour', category: 'woman', stock: '10', price: '4000', description: 'Always forward, lets move!', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/P1060_main_d44fd8bd-3815-4647-b970-30afd1d2717c_1728x.jpg?v=1650573733' },
    { id: '8', name: 'Marc Jacobs Roxy', category: 'woman', stock: '10', price: '6000', description: 'Be different!', photo: 'https://cdn.shopify.com/s/files/1/0520/6809/0007/products/MJ1571_main_8a059ab5-470c-4dbd-8659-180a3b352216_1728x.jpg?v=1658844310' },

]

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? products.find(prod => prod.id === id) : products)
        }, 1200)
    })

}


/* 
gFetch() //gFetch
.then(result => setProducts(result.filter(product => product.category === categoryId)))
.catch(err => console.log(err))
.finally(() => setLoading(false)) */


/* gFetch() //sgFetch
.then(result => setProducts(result))
.catch(err => console.log(err))
.finally(() => setLoading(false))
 */