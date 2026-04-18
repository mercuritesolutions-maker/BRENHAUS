export const MENU_ITEMS = [
  { id: 1, name: 'Handcrafted Latte', price: 145, category: 'Coffee', image: 'https://images.unsplash.com/photo-1536816579748-42bd78240d7e?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Signature Cold Brew', price: 160, category: 'Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Espresso Tonic', price: 155, category: 'Specialty', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Matcha Cream Latte', price: 170, category: 'Tea', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Pain au Chocolat', price: 125, category: 'Pastry', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Butter Croissant', price: 110, category: 'Pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600' },
];

export type MenuItem = typeof MENU_ITEMS[0];
