json.partial! '/api/tracks/track', track: @track

json.track do
  json.id track.id
  json.title track.title
  json.albumName track.album.title
  json.ord track.ord
  json.artwork asset_path(track.album.artwork.url)
end
