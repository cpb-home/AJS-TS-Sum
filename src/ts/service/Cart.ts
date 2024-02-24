import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSum(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  getDiscountedSum(discount: number): number {
    const sum: number = this._items.reduce((acc, item) => acc + item.price, 0);
    return sum - sum / 100 * discount;
  }

  removeItem(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}
