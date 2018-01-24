json.partial! '/api/albums/album', album: @album

json.artist @album.artist.username


# json.tracks do
#   if @album.tracks
#     @album.tracks.each_with_index do |track, idx|
#       json.set! idx do
#         json.extract! track, :title, :album_id, :ord, :audio_file
#       end
#     end
#   end
# end
