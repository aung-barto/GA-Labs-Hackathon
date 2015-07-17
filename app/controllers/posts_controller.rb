class PostsController < ApplicationController
	
  def index
	end

	def show
	end
  
  def search
    query = params[:name]
    @results = Post.search(query)
    render "search"
  end
  
end
