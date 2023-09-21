# frozen_string_literal: true

class Payment < ApplicationRecord
  belongs_to :order
  before_validation :create_on_stripe
  Stripe.api_key = ENV['STRIPE_SECRET_KEY']

  def create_on_stripe
    params = { amount: order.amount_cents, currency: 'usd', source: order.token }
    response = Stripe::Charge.create(params)
    self.stripe_id = response.id
  end
end
