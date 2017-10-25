class AddUserRefToProducts < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :album, index: true
  end
end
