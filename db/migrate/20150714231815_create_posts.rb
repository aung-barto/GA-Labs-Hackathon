class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.text :content
      t.integer :vote_up
      t.integer :vote_down
      t.integer :user_id
      t.integer :location_id
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
