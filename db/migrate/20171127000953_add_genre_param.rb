class AddGenreParam < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :genre, :string
  end
end
