class Game < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_one_attached :photo
end
