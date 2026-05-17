import { type Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [{
    description: 'Nokia A1',
    price: 100.0
},
{
    description: 'iPad Air',
    price: 150.0
}];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);





