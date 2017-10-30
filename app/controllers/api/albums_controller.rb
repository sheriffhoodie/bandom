class Api::AlbumsController < ApplicationController
  before_action :require_login

  def index
    @albums = Album.all
    render :index
  end

  def create
    @album = Album.create!(album_params)
    render :show
  end

  def show
    @album = Album.find(params[:id])
  end

  def album_params
    params.require(:album).permit(:title, :artist, :track)
  end
end
