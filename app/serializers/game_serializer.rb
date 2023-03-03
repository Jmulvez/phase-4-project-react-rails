class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :developer
  has_many :reviews
end
