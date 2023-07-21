# frozen_string_literal: true

require_relative 'prices_cache_maker'

# Class to assign prices to meals
class MealsPriceAssigner
  def self.assign_prices(meals, category)
    meals.each do |meal|
      meal['price'] = PricesCacheMaker.get_or_set_price(meal, category)
    end
  end
end
