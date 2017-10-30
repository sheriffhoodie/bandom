class Api::AlbumsController < ApplicationController
  before_action :require_login

  def index
    @albums = Album.all
    render :index
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render :show
    else
      @artist = @album.artist
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    redirect_to user_url(@album.artist_id)
  end

  def album_params
    params.require(:album).permit(:title, :artist_id, :year, :description)
  end
end
