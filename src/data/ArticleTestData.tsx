import Article from "./Article";
import Order from "./Order";
export const OrderArray: Order[] = [
  new Order("o1", "kek", new Article("1", "Banane"), 6, new Date()),
  new Order("o2", "lel", new Article("2", "Apfel"), 6, new Date()),
  new Order(
    "o3",
    "hans entertainment",
    new Article("3", "Keks"),
    6,
    new Date()
  ),
  new Order("o4", "judas", new Article("4", "Milch"), 6, new Date()),
  new Order("o5", "lulzor", new Article("5", "Mandarine"), 6, new Date()),
];
