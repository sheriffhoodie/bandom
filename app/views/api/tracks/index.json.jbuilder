@tracks.each do |track|
  json.set! track.id do
    json.partial! '/api/tracks/track', track: track
  end
end

json.tracks @tracks do |track|
  json.id track.id
  json.albumName track.album.title
  json.title track.title
  json.ord track.ord
  json.albumId track.album.id
  json.artwork asset_path(track.album.artwork.url)
end
