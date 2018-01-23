class AddImageToTracks < ActiveRecord::Migration[5.1]
  def change
    add_attachment :tracks, :image
  end
end
