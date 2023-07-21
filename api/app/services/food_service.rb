# frozen_string_literal: true

require 'httparty'

# Service that makes requests to the food API
class FoodService
  include HTTParty
  base_uri 'https://www.themealdb.com/api/json/v1/1'

  def self.obtain_categories
    response = obtain_with_error_handling("#{base_uri}/categories.php")
    response&.parsed_response
  end

  def self.obtain_meals_by_category(category)
    response = obtain_with_error_handling("#{base_uri}/filter.php?c=#{category}")
    response&.parsed_response
  end

  private_class_method def self.obtain_with_error_handling(url)
    response = get(url)
    raise "Request failed: #{response.code}" unless response.success?

    response
  rescue StandardError => e
    Rails.logger.error("Error making API request: #{e.message}")
    nil
  end
end
