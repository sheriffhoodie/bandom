# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all
Track.destroy_all

# USERS
User.create!(username: "Spaghetti Disco", password: "starwars", session_token: "sdlfksjfdjfsdf")
User.create!(username: "California Sweater Puppies", password_digest: "starwards", session_token: "lkfdjlakfjadsfj")
User.create!(username: "David's Basement", password_digest: "howhowhow", session_token: "werewtyteurutr")
User.create!(username: "This Must Be The Place", password_digest: "startrekkie", session_token: "lkfdjlakfjadsfj")
User.create!(username: "Plane Station", password_digest: "password1", session_token: "rwteyreueyrds")

# ALBUMS

Album.create!(title: "Childhood and Shame", artist_id: 1, year: 1995, description: "solid 90s rock album, you'll dig it")
Album.create!(title: "Sick Haze", artist_id: 2, year: 1982, description: "Ready to space out? Vague 80's synths and trippy guitar odysseys")
Album.create!(title: "Subway Thoughts", artist_id: 3, year: 2016, description: "Solo acoustic guitar and soft Native American-inspired vocals")
Album.create!(title: "Thank You 39th Street", artist_id: 4, year: 2014, description: "Energizing and fresh alternative take on the modern world")
Album.create!(title: "My Disasterpiece", artist_id: 5, year: 2007, description: "Plane Station's response to Marianas Trench, a grand prog-rock adventure")

# TRACKS

Track.create!(title: "Intro", album_id: 1, ord: 1)
Track.create!(title: "Santa Maria", album_id: 1, ord: 4)
Track.create!(title: "Clouds", album_id: 2, ord: 3)
Track.create!(title: "Subterranean", album_id: 2, ord: 14)
Track.create!(title: "Neon", album_id: 2, ord: 15)
Track.create!(title: "Businessman Blues", album_id: 3, ord: 2)
Track.create!(title: "7 Line Rhapsody", album_id: 3, ord: 7)
Track.create!(title: "Streetlight Shine", album_id: 4, ord: 7)
Track.create!(title: "To Lois From Superman", album_id: 4, ord: 12)
Track.create!(title: "Disasterpice Theatre II", album_id: 5, ord: 6)
Track.create!(title: "Intro", album_id: 5, ord: 10)
