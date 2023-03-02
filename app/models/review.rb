class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :comment, presence: true
    validates :comment, length: { in: 4..100 }
    validates :rating, presence: true
    validates :rating, 
end
