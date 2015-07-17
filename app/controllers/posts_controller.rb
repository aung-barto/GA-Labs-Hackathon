class PostsController < ApplicationController
	def index
	end
	def show
    @post = Post.find(params[:id])
    @location = Location.find(@post.location_id)
    @category = Category.find(@post.category_id)
	end
end
