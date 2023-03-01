class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, length: { in: 5..15 }
    validates :username, uniqueness: true
    validates :password_digest, presence: true
    validates :profile_picture, presence: true
end
