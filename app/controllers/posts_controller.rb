class PostsController < ApplicationController
	
  def index
	end

	def show
    @post = Post.find(params[:id])
    @location = Location.find(@post.location_id)
    @category = Category.find(@post.category_id)
    # render json: @location
	end

  # def locations

  #   @location = Location.all
  #   render json: @location
  # end
  
  def search
    query = params[:name]
    @results = Post.search(query)
    render "search"
  end
  
end
