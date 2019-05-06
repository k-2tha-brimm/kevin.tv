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

require 'test_helper'

class StreamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
