/* Meal Maker

A restaurant has hired you to create a function for their website that allows them 
to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters 
to make sure anyone who uses the new function
 can generate a meal and a price for Today’s Special without any embarrassing errors! 
 */
const menu = {
  _meal: "",
  _price: 0,
  set mealToCheck(todayMeal) {
    if (typeof todayMeal === "string") {
      this._meal = todayMeal;
    }
  },
  set priceToCheck(price) {
    if (typeof price === "number" && price > 0) {
      this._price = price;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}.`;
    } else return `Meal or price was not set correctly!`;
  },
};

// menu._meal = "pizza"
// menu._price = "20"
menu.mealToCheck = "pizza";
menu.priceToCheck = 10;
console.log(menu.todaysSpecial);

//If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!
