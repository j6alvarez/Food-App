# frozen_string_literal: true

require_relative '../services/food_service'
require_relative '../poros/meals_price_assigner'

# Controller for categories
class CategoriesController < ApplicationController
  def index
    render json: categories
  end

  def obtain_meals_by_category
    render json: meals
  end

  private

  def meals
    response = FoodService.obtain_meals_by_category(params[:category])
    @meals = MealsPriceAssigner.assign_prices(response['meals'], params[:category])
  end

  def categories
    response = FoodService.obtain_categories
    @categories = response['categories']
  end
end
