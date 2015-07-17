class SearchController < ApplicationController
  

  def search
    binding.pry
    @results = Search.search params[:name]
  end

end