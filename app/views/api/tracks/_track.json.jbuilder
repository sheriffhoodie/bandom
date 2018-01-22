json.id track.id
json.albumName track.album.title
json.title track.title
json.ord track.ord
json.albumId track.album.id
json.artwork asset_path(track.album.artwork.url)

# json.(track, :id, :title, :ord, :album_id)
# json.album do
#   json.extract! track.album, :id, :title, :artwork
# end
