class AddTimestampsToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :created_at, :datetime, null: false
    add_column :albums, :updated_at, :datetime, null: false
  end
end
