class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.string :dob
      t.boolean :read_legal
      t.integer :current_position
      t.integer :current_division
      t.string :phone_no
      t.string :address
      t.string :email
    

      t.timestamps
    end
  end
end
