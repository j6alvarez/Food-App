# frozen_string_literal: true

class OrdersController < ApplicationController
  def create
    @customer = Customer.find_or_create_by(customer_params)
    @order = Order.new(order_params.merge(payment_method: 'credit_card', customer: @customer))

    if @order.save
      render json: { order: @order, payment: @order.payment }, status: :created
    else
      render json: 'Hubo un error', status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:order).permit(:amount_cents, :token)
  end

  def customer_params
    params[:order][:email]
  end
end
