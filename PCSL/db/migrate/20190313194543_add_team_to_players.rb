class AddTeamToPlayers < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.references :teams
    end
  end
end
