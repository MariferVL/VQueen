import { Menu } from './types';

export const fakeMenu: Menu[] = [{
    id: '123',
    name: 'Sopaipillas con Pebre',
    description: "Sopaipillas con Pebre offers a regal combination of warm, golden sopaipillas and a vibrant salsa. The crispness of the sopaipillas paired with the zesty pebre creates a delightfully royal snack.",
    ingredients: ["sopaipillas", "pebre salsa (tomatoes, onions, cilantro, garlic, spices)"],
    allergens: ["gluten (from sopaipillas)"],
    price: 7,
}, {
    id: '345',
    name: `Vegan Queen's Royale Completo`,
    description: `Indulging in a Vegan Completo is a delight fit for royalty. This plant-based rendition of the classic Completo is a true culinary masterpiece. With a foundation of a soft, warm bun, it embraces a medley of delightful ingredients. Creamy avocado spread, savory plant-based sausage, tangy mayonnaise or vegannaise, juicy tomato slices, zesty ketchup, and a delightful crunch of sauerkraut come together in perfect harmony. Each bite offers a symphony of flavors that will leave you feeling satisfied and amazed. Experience the regal pleasure of a Vegan Completo, where compassion meets culinary excellence.`,
    ingredients: ["avocado", "vegan sausage", "mayonnaise or vegannaise", "tomato", "ketchup", "sauerkraut"],
    allergens: ["soy (tofu or tempeh)"],
    price: 8,
},{
    id: '456',
    name: 'Our mouthwatering Chacarero',
    description: "Indulging in a Vegan Chacarero is embarking on a regal journey of flavors. Grilled vegetables, seasoned tofu or tempeh, greens, vegan mayo, and homemade salsa elevate this sandwich to greatness.",
    ingredients: ["grilled vegetables", "seasoned tofu or tempeh", "greens", "vegan mayo", "homemade salsa"],
    allergens: ["soy (if using tofu or tempeh)"],
    price: 11,
}];

