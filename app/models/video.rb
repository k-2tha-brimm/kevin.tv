# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  streamer_id :integer          not null
#  game_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game

    belongs_to :streamer,
        foreign_key: :streamer_id,
        class_name: :User

    # has_one_attached :video

    # has_one_attached :thumbnail

end
