class AddFeaturedToUsersd < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :featured, :boolean, :default => false
  end
end
