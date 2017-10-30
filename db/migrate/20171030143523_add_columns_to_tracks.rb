class AddColumnsToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :ord, :integer, null: false
    add_column :tracks, :created_at, :datetime, null: false
    add_column :tracks, :updated_at, :datetime, null: false
  end
end
