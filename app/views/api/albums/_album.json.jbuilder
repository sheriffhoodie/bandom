json.id album.id
json.artistName album.artist.username
json.artistId album.artist.id
json.artistPic asset_path(album.artist.image)
json.title album.title
json.description album.description
json.year album.year
json.genre album.genre
json.artwork asset_path(album.artwork)
json.trackImage asset_path(album.track_image)
json.tracks album.tracks do |track|
  json.partial! '/api/tracks/track', track: track
end
