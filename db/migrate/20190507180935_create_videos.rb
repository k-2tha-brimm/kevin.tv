class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :streamer_id, null: false
      t.integer :game_id, null: false

      t.timestamps
    end
    add_index :videos, :streamer_id
    add_index :videos, :game_id
  end
end
