
let products = [
    { id: '1', name: 'Doggy', category: 'dogs', stock: '1', price: '0', photo: 'https://www.capewayvet.com/blog/wp-content/uploads/2014/06/dog-shelter.jpg' },
    { id: '2', name: 'Peluso', category: 'dogs', stock: '1', price: '0', photo: 'https://humanepro.org/sites/default/files/styles/article_new/public/images/post/dog-m160945.jpg?itok=gi1G0Fsw' },
    { id: '3', name: 'Gatsby', category: 'cats', stock: '1', price: '0', photo: 'https://i.cbc.ca/1.6221624.1634928336!/fileImage/httpImage/482743528.jpg' },
    { id: '4', name: 'Gatman', category: 'cats', stock: '1', price: '0', photo: 'https://gawa.org.uk/wp-content/uploads/2022/11/bobbi6-scaled.jpg' },

]

export const gFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
