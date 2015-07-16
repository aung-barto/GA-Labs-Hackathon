class Location < ActiveRecord::Base
	belongs_to :category
	has_many :posts
end
