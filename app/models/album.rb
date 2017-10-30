# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string
#  track_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  artist_id   :integer
#  year        :integer
#  description :text
#

class Album < ApplicationRecord
  validates :title, :artist, :year, :description, presence: true
  validates :name, uniqueness: { scope: :artist_id }
  validates :year, numericality: { minimum: 1900, maximum: 2018 }

  belongs_to :artist
  has_many :tracks, dependent: :destroy
end
