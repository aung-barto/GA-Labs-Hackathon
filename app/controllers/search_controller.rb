class SearchController < ApplicationController
  

  def search
    @results = Search.search params[:name]
  end

end