import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

console.log(cart.getSum());

console.log(cart.getDiscountedSum(10));

cart.add(new Book(333, 'AAA', 'AAA AAAA', 1500, 895));
cart.add(new Book(334, 'BBB', 'BBB BBBB', 3500, 486));
cart.add(new Book(335, 'CCC', 'CCC CCCC', 5400, 250));

console.log(cart.items);

cart.removeItem(334);

console.log(cart.items);