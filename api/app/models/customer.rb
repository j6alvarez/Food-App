# frozen_string_literal: true

class Customer < ApplicationRecord
  validates :stripe_id, presence: true
  has_many :orders
  before_validation :create_on_stripe, on: :create
  Stripe.api_key = ENV['STRIPE_SECRET_KEY'] 

  def create_on_stripe
    params = { email: email }
    response = Stripe::Customer.create(params)
    self.stripe_id = response.id
  end
end
