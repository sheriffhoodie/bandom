class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render :index
  end

  def create
    @album = Album.new(album_params)
    @album.artist_id = current_user.id
    if @album.save
      render :show
    else
      @artist = @album.artist
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      @album = @artist.album
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    if @album.destroy
      redirect_to :index
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:artist_id, :title, :year, :genre, :description, :artwork)
  end
end
