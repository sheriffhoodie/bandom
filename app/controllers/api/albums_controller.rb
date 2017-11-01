class Api::AlbumsController < ApplicationController

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
      album = @artist.album
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    if @album.destroy
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def album_params
    params.require(:album).permit(:title, :artist_id, :year, :description)
  end
end
