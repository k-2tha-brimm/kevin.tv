class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false 
      t.string :session_token, null: false, unique: true
      t.date :date_of_birth, null: false
      t.timestamps
    end
  end
end
