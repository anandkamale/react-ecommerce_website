const initState = {
    products: [
        {id: 1, name: 'man Shirt Winter Season', image: '1.jpg', price: 200, discount: 2, discountPrice: 200  - 2 / 100 * 20, quantity: 1, desc: "Care Instructions: Machine Wash Fit Type: Regular FitFabric: Cotton; Style: Regular Neck Style: CollaredPattern: Solid Sleeve Type: Long Sleeve Closure Type: Button; Sleeve Type: Long Sleeve; Collar Style: Round Collar"},
        {id: 2, name: 'woman jacket for winter', image: '2.jpg', price: 300, discount: 5, discountPrice: 300  - 5 / 100 * 30, quantity: 1, desc: "This jacket will keep your upper body warm. cloth used in this jacket is so soft that it will not irritate your skin and provide smooth and silky jacket."},
        {id: 3, name: 'man trouser for all seasons', image: '3.jpg', price: 150, discount: 3, discountPrice: 150  - 3 / 100 * 15, quantity: 1, desc: "trousers, also spelled trowsers, also called pants or slacks, an outer garment covering the lower half of the body from the waist to the ankles and divided into sections to cover each leg separately."},
        {id: 4, name: 'shoes for all season', image: '4.jpg', price: 500, discount: 4, discountPrice: 500  - 4 / 100 * 50, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},
        {id: 5, name: 'female suit ', image: '56.jpg', price: 250, discount: 2, discountPrice: 250  - 2 / 100 * 25, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},
        {id: 6, name: 'male jeans', image: '66.jpg', price: 600, discount: 6, discountPrice: 600  - 6 / 100 * 60, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},
        {id: 7, name: 'male trouser for all seasons', image: '75.jpg', price: 350, discount: 2, discountPrice: 350  - 2 / 100 * 35, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},
        {id: 8, name: 'male jacket for winter', image: '88.jpg', price: 800, discount: 7, discountPrice: 800  - 7 / 100 * 80, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},
        {id: 9, name: 'male bomber jacket ', image: '99.jpg', price: 950, discount: 4, discountPrice: 950  - 4 / 100 * 95, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},        
        {id: 10, name: 'male winter jacket', image: '100.jpg', price: 1200, discount: 3, discountPrice: 1200  - 3 / 100 * 120, quantity: 1, desc: "Shop trends and ideas in fashion and beauty, recommended by social influencers. Get style inspiration from fashion and beauty experts. Stay gorgeous everyday."},   
       

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;