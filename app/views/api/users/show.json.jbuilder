json.partial! "api/users/user", user: @user
albums = @user.albums
json.albums do
  if @user.albums
    @user.albums.each do |album|
      json.set! album.id do
        json.extract! album, :title, :description, :artist_id, :year, :genre, :artwork
      end
    end
  end
end
