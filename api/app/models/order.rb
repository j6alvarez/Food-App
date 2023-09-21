# frozen_string_literal: true

class Order < ApplicationRecord
  belongs_to :customer
  has_one :payment
  after_create :create_payment
  # For now only credit card
  # Example: enum payment_method: %i[credit_card ach boleto]
  enum payment_method: %i[credit_card]
end
