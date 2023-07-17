require 'httparty'

class FoodService
  include HTTParty
  base_uri 'https://www.themealdb.com/api/json/v1/1'

  def self.get_categories
    response = get_with_error_handling("#{base_uri}/categories.php")
    response&.parsed_response
  end

  def self.get_meals_by_category(category)
    response = get_with_error_handling("#{base_uri}/filter.php?c=#{category}")
    response&.parsed_response
  end

  private_class_method def self.get_with_error_handling(url)
    response = get(url)
    raise "Request failed: #{response.code}" unless response.success?

    response
  rescue StandardError => e
    Rails.logger.error("Error making API request: #{e.message}")
    nil
  end
end