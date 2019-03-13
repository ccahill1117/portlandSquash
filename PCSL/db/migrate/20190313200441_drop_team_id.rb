class DropTeamId < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :teams_id

  end
end
