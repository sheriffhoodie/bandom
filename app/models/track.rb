# == Schema Information
#
# Table name: tracks
#
#  id                      :integer          not null, primary key
#  title                   :string
#  album_id                :integer
#  ord                     :integer          not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  audio_file_file_name    :string
#  audio_file_content_type :string
#  audio_file_file_size    :integer
#  audio_file_updated_at   :datetime
#

class Track < ApplicationRecord
  validates :title, :album_id, :ord, presence: true
  validates :title, uniqueness: true
  validates :ord, uniqueness: { scope: :album_id }
  has_attached_file :audio_file
  validates_attachment_presence :audio_file
  do_not_validate_attachment_file_type :audio_file, :content_type => [ 'audio/mp3', 'audio/mpeg' ]

  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  has_one :artist,
  through: :album,
  source: :artist

end
