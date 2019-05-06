# == Schema Information
#
# Table name: streams
#
#  id          :bigint           not null, primary key
#  streamer_id :integer          not null
#  game_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           default("(Untitled)")
#

class Stream < ApplicationRecord

    belongs_to :streamer,
        foreign_key: :streamer_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game
end
