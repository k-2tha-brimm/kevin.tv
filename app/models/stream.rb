class Stream < ApplicationRecord

    belongs_to :streamer,
        foreign_key: :streamer_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game
end
