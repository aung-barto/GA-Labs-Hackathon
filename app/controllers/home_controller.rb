class HomeController < ApplicationController
  def index
    @categories = Category.all
    @categories.each do |category|
  	 @posts = Post.all
    end
  end
  # def index
  #   @categories = Category.all
    
  #    @posts = Post.limit(5)
  
  # end
  # def index
  #   @categories = Category.all
  #   # @categories.each do |category|
  #   @posts_a = Post.where(category_id: 1).limit(5)
  #   @posts_b = Post.where(category_id: 2).limit(5)
  #   @posts_c = Post.where(category_id: 3).limit(5)
  #   @posts_d = Post.where(category_id: 4).limit(5)
  #   @posts5 = Post.where(category_id: 5).limit(5)
  #   @posts6 = Post.where(category_id: 6).limit(5)
    
  # end
end
