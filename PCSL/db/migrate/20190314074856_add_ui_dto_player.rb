class AddUiDtoPlayer < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.string :uid
      
    end
  end
end
