class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :team_name
      t.integer :team_division
      t.integer :player_id_1
      t.integer :player_id_2
      t.integer :player_id_3
      t.integer :player_id_4
      t.integer :player_id_5

      t.timestamps
    end
  end
end
