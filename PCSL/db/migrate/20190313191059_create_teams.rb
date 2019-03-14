class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :division
      t.string :captain

      t.timestamps

      # add_reference :players, :team, index: true
      # add_foreign_key :players, :teams
    end
  end
end
