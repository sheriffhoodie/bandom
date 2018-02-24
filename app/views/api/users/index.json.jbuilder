@users.each do |user|
  albums = user.albums
  json.set! user.id do
    json.extract! user, :username, :id, :featured
  end
end
