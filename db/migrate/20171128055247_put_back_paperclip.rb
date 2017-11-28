class PutBackPaperclip < ActiveRecord::Migration[5.1]
  def self.up
    change_table :albums do |t|
      t.attachment :artwork
    end
  end

  def self.down
    remove_attachment :albums, :artwork
  end
end
