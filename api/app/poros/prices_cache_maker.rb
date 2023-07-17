include CategoriesHelper
class PricesCacheMaker
    @prices = {}
    @categoriesPrices={}

  def self.get_or_set_price(meal, category)
    symbolized_meal = meal.transform_keys(&:to_sym)
    meal_id = symbolized_meal[:idMeal]
    price = @prices[meal_id]
    return price if price

    price = calculate_price(symbolized_meal, category.downcase)
    @prices[meal_id] = price
    price
  end

  private 
  
  def self.calculate_price(meal, category)
   # Business logic says Lamb > Beef > Pork. So making random prices we have to check the meal's category first

    price = rand(10..100)

    return price unless verify_category_name(category)

    special_price = create_random_price_for_special_category(category)
    update_special_category_price(category, special_price)
    special_price
  end
end