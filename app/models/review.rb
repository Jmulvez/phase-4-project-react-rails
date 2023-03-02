class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :comment, presence: true
    validates :comment, length: { in: 4..100 }
    validates :rating, presence: true
    validates :rating, inclusion: { in: %w(1, 2, 3, 4, 5) }
end
