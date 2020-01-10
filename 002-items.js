exports.seed = function(knex) {
  return knex('items').insert([
    {name: 'Exotic Eggs', description: "Some description", price: 3, quantity: 25.00, category: "Animal Products", user_id: 3},
    {name: 'Yellow Beans', description: "Some description", price: 4, quantity: 36.00, category: "Beans", user_id: 3},
    {name: 'Red Beans', description: "Some description", price: 12, quantity: 80.00, category: "Beans", user_id: 3},
    {name: 'Chic Pea', description: "Some description", price: 5, quantity: 112.00, category: "Peas", user_id: 3},
    {name: 'Green Peas', description: "Some description", price: 7, quantity: 66.00, category: "Peas", user_id: 4},
    {name: 'Cassava Flour', description: "Some description", price: 8, quantity: 7.00, category: "Roots&Tubers", user_id: 4},
    {name: 'Cassava Fresh', description: "Some description", price: 3, quantity: 9.00, category: "Roots&Tubers", user_id: 4},
    {name: 'Sun Dried Cassava', description: "Some description", price: 9, quantity: 12.00, category: "Roots&Tubers", user_id: 4},
    {name: 'Simsim', description: "Some description", price: 6, quantity: 16.00, category: "Seeds & Nuts", user_id: 5},
    {name: 'Sunflower Seed', description: "Some description", price: 6, quantity: 11.00, category: "Seeds & Nuts", user_id: 5},
    {name: 'Processed Honey', description: "Some description", price: 9, quantity: 18.00, category: "Animal Products", user_id: 5}
  ]);
};

