class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :street_address
      t.string :city
      t.string :state
      t.string :cross_st1
      t.string :cross_st2
      t.string :neighborhood
      t.string :location_name
      t.text :location_notes
      t.string :phone
      t.string :website
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
