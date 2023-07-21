# frozen_string_literal: true

# module with methods to help PricesCacheMaker
module CategoriesHelper
  private

  SPECIAL_CATEGORIES = %w[lamb pork beef].freeze

  def verify_category_name(category)
    SPECIAL_CATEGORIES.include?(category)
  end

  def update_special_category_price(category, price)
    return @categories_prices[category] = { max_price: price, min_price: price } unless @categories_prices[category]

    return @categories_prices[category][:min_price] = price if price <= @categories_prices[category][:min_price]

    return @categories_prices[category][:max_price] = price if price >= @categories_prices[category][:max_price]

    nil
  end

  def pork?(category)
    category == 'pork'
  end

  def beef?(category)
    category == 'beef'
  end

  def lamb?(category)
    category == 'lamb'
  end

  def lamb_exists
    @categories_prices['lamb']
  end

  def beef_exists
    @categories_prices['beef']
  end

  def pork_exists
    @categories_prices['pork']
  end

  # validates Lamb > Beef > Pork.

  def create_random_price_for_special_category(category)
    return random_price_for_lamb(category) if lamb?(category)
    return random_price_for_beef(category) if beef?(category)
    return random_price_for_pork(category) if pork?(category)

    # Provide a default value here if none of the category conditions matches
    # For example:
    rand(10..100)
  end

  def random_price_for_lamb(_category)
    if beef_exists
      rand(@categories_prices['beef'][:max_price] + 1..100)
    elsif pork_exists
      rand(@categories_prices['pork'][:max_price] + 2..100)
    else
      rand(14..100)
    end
  end

  def random_price_for_beef(_category)
    return rand((max_price_for_pork(+1))..(min_price_for_lamb(-1))) if lamb_exists && pork_exists
    return rand(12..(max_price_for_lamb - 1)) if lamb_exists
    return rand((max_price_for_pork + 1)..98) if pork_exists

    rand(12..98)
  end

  def random_price_for_pork(_category)
    return rand(10..(min_price_for_beef - 1)) if beef_exists
    return rand(10..(min_price_for_lamb - 2)) if lamb_exists

    rand(10..96)
  end

  def max_price_for_beef_and_lamb
    [@categories_prices['beef'][:max_price], @categories_prices['lamb'][:max_price]].min
  end

  def max_price_for_lamb
    @categories_prices['lamb'][:max_price]
  end

  def max_price_for_pork
    @categories_prices['pork'][:max_price]
  end

  def min_price_for_beef
    @categories_prices['beef'][:min_price]
  end

  def min_price_for_lamb
    @categories_prices['lamb'][:min_price]
  end
end
