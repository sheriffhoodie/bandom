# == Schema Information
#
# Table name: albums
#
#  id                       :integer          not null, primary key
#  title                    :string
#  track_id                 :integer
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  artist_id                :integer
#  year                     :integer
#  description              :text
#  genre                    :string
#  artwork_file_name        :string
#  artwork_content_type     :string
#  artwork_file_size        :integer
#  artwork_updated_at       :datetime
#  track_image_file_name    :string
#  track_image_content_type :string
#  track_image_file_size    :integer
#  track_image_updated_at   :datetime
#

class Album < ApplicationRecord
  validates :title, :artist_id, :year, :description, :genre, presence: true
  validates :title, uniqueness: { scope: :artist_id }
  validates :year, numericality: { minimum: 1900, maximum: 2018 }
  has_attached_file :artwork, styles: { medium: "352x352>", thumb: "100x100>" }, default_url: "https://s3.us-east-2.amazonaws.com/bandom-dev/albums/images/blank-album-art.png"
  validates_attachment_file_name :artwork, matches: [/png\z/, /jpe?g\z/, /JPG\z/, /JPEG\z/, /PNG\z/]
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/
  has_attached_file :track_image, default_url: "https://s3.us-east-2.amazonaws.com/bandom-dev/tracks/musicnote.png"

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many :tracks, dependent: :destroy,
  foreign_key: :album_id,
  class_name: :Track

end
