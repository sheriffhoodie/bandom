# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string
#  track_id           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  artist_id          :integer
#  year               :integer
#  description        :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  genre              :string
#

class Album < ApplicationRecord
  validates :title, :artist_id, :year, :description, :genre, presence: true
  validates :title, uniqueness: { scope: :artist_id }
  validates :year, numericality: { minimum: 1900, maximum: 2018 }
  has_attached_file :image, default_url: "band-icon.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many :tracks, dependent: :destroy,
  foreign_key: :album_id,
  class_name: :Track

end
