class PostsController < ApplicationController
	
  def index
    @posts = Post.all
    @categories = Category.all
	end

	def show
    @posts = Post.all
    @post = Post.find(params[:id])
    @location = Location.find(@post.location_id)
    @category = Category.find(@post.category_id)
	end
  
  def search
    query = params[:name]
    @results = Post.search(query).first(10)

    @locations = []
    @results.each do |r|
      @locations << Location.find(r.location_id)
    end
    render "search"
  end

end
