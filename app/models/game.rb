class Game < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_one_attached :photo

    has_many :streams,
        foreign_key: :streamer_id,
        class_name: :Stream

    has_many :streamers,
        through: :streams,
        source: :streamer

end
