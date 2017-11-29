class RemoveArtworkColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :artwork
  end
end
