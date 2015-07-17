class Post < ActiveRecord::Base
	belongs_to :category
	belongs_to :location


  def self.search(query)
    categories = ["food", "bar", "sights", "outdoors", "just for fun", "culture", "shopping"]
    if categories.include? query.downcase 
      Post.joins{category}.where{(category.name.like query)}
    else
      search_condition = "%" + query + "%"
      Post.where{(title =~ search_condition) | (content =~ search_condition)}
    end
  end

end
