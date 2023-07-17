module CategoriesHelper
  private
  SPECIAL_CATEGORIES= ["lamb", "pork", "beef"]

  def verify_category_name(category)
    SPECIAL_CATEGORIES.include?(category)
  end

  def update_special_category_price(category,price)
    return @categoriesPrices[category] = {max_price: price, min_price: price} unless @categoriesPrices[category]

    return @categoriesPrices[category][:min_price] = price if price <= @categoriesPrices[category][:min_price]

    return @categoriesPrices[category][:max_price] = price if price >= @categoriesPrices[category][:max_price]

    nil
  end

  def is_pork?(category)
    category == "pork"
  end

  def is_beef?(category)
    category == "beef"
  end

  def is_lamb?(category)
    category == "lamb"
  end

  def lamb_exists
    @categoriesPrices['lamb']
  end

  def beef_exists
    @categoriesPrices['beef']
  end

  def pork_exists
    @categoriesPrices['pork']
  end

  # validates Lamb > Beef > Pork.
  def create_random_price_for_special_category(category)
    if is_lamb?(category) && beef_exists
      return rand(@categoriesPrices['beef'][:max_price]+1..100)
    elsif is_lamb?(category) && pork_exists && !beef_exists
      return rand(@categoriesPrices['pork'][:max_price]+2..100)
      elsif is_lamb?(category) && !pork_exists && !beef_exists
      return rand(14..100)
    elsif is_beef?(category) && lamb_exists && pork_exists
      return rand(@categoriesPrices['pork'][:max_price]+1..@categoriesPrices['lamb'][:min_price]-1)
      elsif is_beef?(category) && lamb_exists && !pork_exists
      return rand(12..@categoriesPrices['lamb'][:min_price]-1)
    elsif is_beef?(category) && !lamb_exists && pork_exists
      return rand(@categoriesPrices['pork'][:max_price]+1..98)
    elsif is_beef?(category) && !lamb_exists && !pork_exists
      return rand(12..98)
    elsif is_pork?(category) && beef_exists
      return rand(10..@categoriesPrices['beef'][:min_price]-1)
    elsif is_pork?(category) && !beef_exists && lamb_exists
      return rand(10..@categoriesPrices['lamb'][:min_price]-2)
    elsif is_pork?(category) && !beef_exists && !lamb_exists
      return rand(10..96)
    end
  end
end