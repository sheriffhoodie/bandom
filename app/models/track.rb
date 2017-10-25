# == Schema Information
#
# Table name: tracks
#
#  id       :integer          not null, primary key
#  title    :string
#  album_id :integer
#

class Track < ApplicationRecord
validates :title, :album, presence: true, uniqueness: true

belongs_to :album
end
