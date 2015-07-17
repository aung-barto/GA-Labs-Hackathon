class Search < ActiveRecord::Base

  def self.search(search)
    search_condition = "%" + search + "%"
    find(:all, :conditions => ['name LIKE ? OR street_address LIKE ? OR city LIKE ? OR state LIKE ? OR cross_st1 LIKE ? OR cross_st2 LIKE ? OR neighborhood LIKE ? OR location_name LIKE ? location_notes LIKE ? OR phone LIKE ? OR website LIKE ? OR title LIKE ? content LIKE ?', search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition, search_condition])
  end
end
