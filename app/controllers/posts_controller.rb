class PostsController < ApplicationController
	
  def index
    @posts = Post.all
    @categories = Category.all
	end

	def show
    @post = Post.find(params[:id])

    @location = Location.find(@post.location_id)
    @category = Category.find(@post.category_id)

    # get similar posts
    @posts = Post.where(category_id: @category.id).where.not(id: params[:id]).sample(4)
	end
  
  def search
    @query = params[:name]

    # to redirect to the index page if the search bar is empty
    if !(params[:name].present?) && params[:name].length < 1
      redirect_to root_path, :error => "Please enter a search word"

    else
      @results = Post.search(@query).limit(10)
  
    # get address to be convert into lat/lng for map markers
    @locations = []
      @results.each do |r|
        @locations << Location.find(r.location_id)
      end
    end
    "render (search) and return" 
  end

end
