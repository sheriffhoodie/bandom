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
u1 = User.create!(username: "Spaghetti Disco", password: "starwars", session_token: "sdlfksjfdjfsdf")
u2 = User.create!(username: "California Sweater Puppies", password_digest: "starwards", session_token: "lkfdjlakfjadsfj")
u3 = User.create!(username: "David's Basement", password_digest: "howhowhow", session_token: "werewtyteurutr")
u4 = User.create!(username: "This Must Be The Place", password_digest: "startrekkie", session_token: "lkfdjlakfdsfdsjadsfj")
u5 = User.create!(username: "Plane Station", password_digest: "password1", session_token: "rwteyreueyrds")
u6 = User.create!(username: "Benja Blue", password_digest: "passpasspass", session_token: "skfjieioweo")
u7 = User.create!(username: "Corsky", password_digest: "passdiggigis", session_token: "sesyioywnc")

# ALBUMS

a1 = Album.create!(title: "Childhood and Shame", artist_id: u1.id, year: 1995, description: "solid 90s rock album, you'll dig it")
a2 = Album.create!(title: "Sick Haze", artist_id: u2.id, year: 1982, description: "Ready to space out? Vague 80's synths and trippy guitar odysseys")
a3 = Album.create!(title: "Subway Thoughts", artist_id: u3.id, year: 2016, description: "Solo acoustic guitar and soft Native American-inspired vocals")
a4 = Album.create!(title: "Thank You 39th Street", artist_id: u4.id, year: 2014, description: "Energizing and fresh alternative take on the modern world")
a5 = Album.create!(title: "My Disasterpiece", artist_id: u5.id, year: 2007, description: "Plane Station's response to Marianas Trench, a grand prog-rock adventure")
a6 = Album.create!(title: "Randomonium", artist_id: u5.id, year: 2010, description: "A collection of lead singer Kelby Lu's most heart-wrenching vocal melodies")
a7 = Album.create!(title: "Loop Do", artist_id: u6.id, year: 2017, description: "Solo acoustic rock artist Benjamin Blue shows off his passion in his breakthrough debut album")
a8 = Album.create!(title: "Everyone Sign In?", artist_id: u7.id, year: 2012, description: "Sardonic, whimsical, addicting entertainment")

# TRACKS

Track.create!(title: "Intro", album_id: a1.id, ord: 1)
Track.create!(title: "Santa Maria", album_id: a1.id, ord: 2)
Track.create!(title: "Stacy's Stepdad", album_id: a1.id, ord: 3)
Track.create!(title: "Clouds", album_id: a2.id, ord: 1)
Track.create!(title: "Subterranean", album_id: a2.id, ord: 2)
Track.create!(title: "Neon", album_id: a2.id, ord: 3)
Track.create!(title: "Businessman Blues", album_id: a3.id, ord: 1)
Track.create!(title: "7 Line Rhapsody", album_id: a3.id, ord: 2)
Track.create!(title: "Kill Me (Thumbs Up)", album_id: a3.id, ord: 3)
Track.create!(title: "Streetlight Shine", album_id: a4.id, ord: 1)
Track.create!(title: "To Lois From Superman", album_id: a4.id, ord: 2)
Track.create!(title: "Ode to Annelise, No. 7", album_id: a4.id, ord: 3)
Track.create!(title: "Bridget of the Boulevard", album_id: a4.id, ord: 4)
Track.create!(title: "Fan of the Muffin man", album_id: a4.id, ord: 5)
Track.create!(title: "Disasterpice Theatre II", album_id: a5.id, ord: 1)
Track.create!(title: "Manhattan Vaseline", album_id: a5.id, ord: 2)
Track.create!(title: "Where Are My Errors?", album_id: a5.id, ord: 3)
Track.create!(title: "Mean What You Say", album_id: a6.id, ord: 1)
Track.create!(title: "My Dirty E(x)", album_id: a6.id, ord: 2)
Track.create!(title: "Ella, Where Are You?", album_id: a6.id, ord: 3)
Track.create!(title: "Control Scrolling Through My Life", album_id: a7.id, ord: 1)
Track.create!(title: "Whole Foods, Half Full", album_id: a7.id, ord: 2)
Track.create!(title: "Oakland A for Effort", album_id: a7.id, ord: 3)
Track.create!(title: "Mellow There", album_id: a7.id, ord: 4)
Track.create!(title: "Call Me 'Coreynelius', Baby", album_id: a8.id, ord: 1)
Track.create!(title: "Snap Snap", album_id: a8.id, ord: 2)
Track.create!(title: "Everyone Sign In?", album_id: a8.id, ord: 3)
Track.create!(title: "Twenty-eighth day today! woooohoooo!", album_id: a8.id, ord: 4)
Track.create!(title: "Boiyoiyoiyoing", album_id: a8.id, ord: 5)
