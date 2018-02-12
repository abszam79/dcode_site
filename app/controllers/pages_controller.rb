class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :work]

  def home
  end
end
