class Post < ActiveRecord::Base
	belongs_to :category
	belongs_to :location

  def self.search(query)

      categories = ["food", "sights", "parks", "culture", "other activities"]
      if categories.include? query.downcase 
        Post.joins{category}.where{(category.name.like query)}
      else
        search_condition = "%" + query + "%"
        # @posts = Post.where{(title =~ search_condition) | (content =~ search_condition)}
        @posts = Post.joins{location}.where{(title =~ search_condition) | (content =~ search_condition) | (location.location_name =~ search_condition)} 
      end
    
  end

end
