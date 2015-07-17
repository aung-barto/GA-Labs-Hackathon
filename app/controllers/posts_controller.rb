class PostsController < ApplicationController
	
  def index
	end

	def show
    @posts = Post.all
    @post = Post.find(params[:id])
    @location = Location.find(@post.location_id)
    @category = Category.find(@post.category_id)
	end
  
  def search
    query = params[:name]
    @results = Post.search(query)
    @locations = Location.all
    render "search"
  end
  
end
