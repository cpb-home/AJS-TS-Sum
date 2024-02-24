import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('getting items test', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items).toEqual([
    {"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000},
    {"author": "Linkin Park", "id": 1008, "name": "Meteora", "price": 900}
  ]);
});

test('summaring without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getSum()).toBe(2900);
});

test('summaring with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getDiscountedSum(10)).toBe(2610);
});

test('remove item testing', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(333, 'AAA', 'AAA AAAA', 1500, 895));
  cart.removeItem(333);

  expect(cart.items).toEqual([
    {"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000},
    {"author": "Linkin Park", "id": 1008, "name": "Meteora", "price": 900}
  ]);
});