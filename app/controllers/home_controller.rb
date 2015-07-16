class HomeController < ApplicationController
  def index
    @categories = Category.all
  	@posts = Post.all
  end
end
