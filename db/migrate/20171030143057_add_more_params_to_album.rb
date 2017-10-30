class AddMoreParamsToAlbum < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :year, :integer
    add_column :albums, :description, :text
  end
end
