class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :name
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
      t.string :title
      t.text :content

      t.timestamps null: false
    end
  end
end
