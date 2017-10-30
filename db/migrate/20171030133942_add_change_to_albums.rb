class AddChangeToAlbums < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :author_id
    add_column :albums, :artist_id, :integer
  end
end
