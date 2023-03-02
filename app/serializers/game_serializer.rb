class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :developer
end
