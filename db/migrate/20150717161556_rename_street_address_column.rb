class RenameStreetAddressColumn < ActiveRecord::Migration
  def change
    rename_column :locations, :street_address, :address
  end
end
