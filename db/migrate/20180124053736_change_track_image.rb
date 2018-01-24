class ChangeTrackImage < ActiveRecord::Migration[5.1]
  def change
    add_attachment :albums, :track_image
    remove_attachment :tracks, :image
  end
end
