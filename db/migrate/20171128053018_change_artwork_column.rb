class ChangeArtworkColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :image_file_name
    remove_column :albums, :image_file_size
    remove_column :albums, :image_content_type
    remove_column :albums, :image_updated_at
    add_column :albums, :artwork, :string
  end
end
