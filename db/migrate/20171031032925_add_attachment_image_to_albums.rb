class AddAttachmentImageToAlbums < ActiveRecord::Migration[5.1]
  def self.up
    change_table :albums do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :albums, :image
  end
end
