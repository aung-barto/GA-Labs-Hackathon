class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :locations, :category_id, :location_category_id   
  end
end
