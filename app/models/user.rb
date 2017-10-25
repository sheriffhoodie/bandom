# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  album_id        :integer
#

class User < ApplicationRecord
validates :username, :password_digest, :session_token, presence: true, uniqueness: true
validates :password, length: { minimum: 6, allow_nil: true }

has_many :albums

before_validation :ensure_session_token

attr_reader :password

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  (user && user.is_password?(password)) ? user : nil
end

def self.generate_session_token
  SecureRandom.urlsafe_base64
end

def reset_session_token
  self.session_token = User.generate_session_token
  self.save!
  self.session_token
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def ensure_session_token
  self.session_token ||= User.generate_session_token
end
end
