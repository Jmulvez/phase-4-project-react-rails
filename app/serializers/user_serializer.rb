class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture
  has_many :reviews
end
