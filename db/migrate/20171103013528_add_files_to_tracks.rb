class AddFilesToTracks < ActiveRecord::Migration[5.1]
  def change
    add_attachment :tracks, :audio_file
  end
end
