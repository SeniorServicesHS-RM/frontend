import Article from "./Article";
import Order from "./Order";
export const OrderArray: Order[] = [
  new Order(
    "order1",
    "sen001",
    [
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
    ],
    new Date(),
    [],
    undefined,
    "emp001"
  ),
  new Order(
    "order2",
    "sen002",
    [
      new Article("art002", "Apfel", 3, "Aldi", false, "Lila"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
      new Article("art001", "Banane", 3, "Rewe", false, "Gelbe"),
    ],
    new Date(),
    [],
    undefined,
    "emp001"
  ),
  //   new Order(
  //     "o1",
  //     "senior1",
  //     new Article("1", "Banane",6,"Aldi", "Gelbe"),
  //     new Date(),
  //   ),
  //   new Order(
  //     "o2",
  //     "senior2",
  //     new Article("2", "Apfel", "Grüne"),
  //     6,
  //     new Date(),
  //     "Rewe"
  //   ),
  //   new Order(
  //     "o3",
  //     "senior3",
  //     new Article("3", "Keks", "Schokolade"),
  //     6,
  //     new Date(),
  //     "Kaufland"
  //   ),
  //   new Order(
  //     "o4",
  //     "senior4",
  //     new Article("4", "Milch", "Weiß"),
  //     6,
  //     new Date(),
  // new Order(
  //   "o5",
  //   "senior5",
  //   [new Article(Date.now().toString(), "Mandarine", 5, "Lidl")],
  //   new Date()
  // ),
  // new Order(
  //   "o6",
  //   "senior5",
  //   [new Article(Date.now().toString(), "Mandarine2", 5, "Aldi")],
  //   new Date()
  // ),
];
export const MartAry: String[] = ["Rewe", "Aldi", "Lidl", "Edeka", "Kaufland"];
