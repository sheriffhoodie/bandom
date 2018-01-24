@tracks.each do |track|
  json.set!(track.id) do
    json.extract!(track, :id, :album_id, :title, :ord, :audio_file)
  end
end
