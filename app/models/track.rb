# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string
#  album_id   :integer
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :album, :ord, presence: true
  validates :title, uniqueness: true
  validates :ord, uniqueness: { scope: :ablum_id }

  belongs_to :album

  has_one :artist,
  through: :album,
  source: :artist

end
