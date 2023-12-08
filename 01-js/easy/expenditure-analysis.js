/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let expenses = {}; // ek expenses name ka object banaya jismein saare category aur unke total kharche jayenge
  let categoryPrice = []; // final form jismein result return karna hai

  // ab transactions ke saare objects se unke category aur price extract kar rhe;
  for (let i = 0; i < transactions.length; i++) {
    var category = transactions[i].category;
    var price = transactions[i].price;

    // agar category already expenses mein hai to price usi mein add kar rhe, nhi to category expenses mein enter kar rhe:
    if (!expenses[category]) {
      expenses[category] = price;
    } else {
      expenses[category] += price;
    }
  }

  // final result waale format mein saare category aur unke price enter kar rhe:
  let categories = Object.entries(expenses);
  for (let j = 0; j < categories.length; j++) {
    categoryPrice.push({
      category: categories[j][0],
      totalSpent: categories[j][1],
    });
  }

  return categoryPrice;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
