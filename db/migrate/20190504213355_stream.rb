class Stream < ActiveRecord::Migration[5.2]
  def change
    create_table :streams do |t|
      t.integer :streamer_id, null: false
      t.integer :game_id, null: false
      t.timestamps
    end
    add_index :streams, :streamer_id
    add_index :streams, :game_id
  end
end
