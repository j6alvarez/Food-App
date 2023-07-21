# frozen_string_literal: true

# rubocop:disable Style/MixinUsage
include CategoriesHelper
# rubocop:enable Style/MixinUsage

# Poro that caches prices for meals
class PricesCacheMaker
  @prices = {}
  @categories_prices = {}

  def self.get_or_set_price(meal, category)
    symbolized_meal = meal.transform_keys(&:to_sym)
    meal_id = symbolized_meal[:idMeal]
    price = @prices[meal_id] # Volver esto un diccionario verifican caching USAR VARIABLES DE ENTORNO y correr Rubocop
    return price if price

    price = calculate_price(symbolized_meal, category.downcase)
    @prices[meal_id] = price
    price
  end

  def self.calculate_price(_meal, category)
    # Business logic says Lamb > Beef > Pork. So making random prices we have to check the meal's category first

    price = rand(10..100)

    return price unless verify_category_name(category)

    special_price = create_random_price_for_special_category(category)
    update_special_category_price(category, special_price)
    special_price
  end
end
