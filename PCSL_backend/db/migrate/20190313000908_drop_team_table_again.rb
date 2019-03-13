class DropTeamTableAgain < ActiveRecord::Migration[5.2]
  def up
    drop_table :teams
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
