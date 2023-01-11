
let products = [
    { id: '1', name: 'Doggy', category: 'dogs', price: '20', description: 'Come to know me, let be friends', photo: 'https://www.capewayvet.com/blog/wp-content/uploads/2014/06/dog-shelter.jpg' },
    { id: '2', name: 'Peluso', category: 'dogs', price: '20', description: 'Im peluso, come to know me!', photo: 'https://humanepro.org/sites/default/files/styles/article_new/public/images/post/dog-m160945.jpg?itok=gi1G0Fsw' },
    { id: '3', name: 'Gatsby', category: 'cats', price: '50', description: 'Everybody know me like Gatsby, and you?', photo: 'https://i.cbc.ca/1.6221624.1634928336!/fileImage/httpImage/482743528.jpg' },
    { id: '4', name: 'Gatman', category: 'cats', price: '60', description: 'You can be my slave... Frrriend, i say FRIEND', photo: 'https://nypost.com/wp-content/uploads/sites/2/2019/06/sad-cat.jpg?quality=75&strip=all&w=744' },

]

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? products.find(prod => prod.id === id) : products)
        }, 1200)
    })
}
