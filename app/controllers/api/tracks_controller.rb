class Api::TracksController < ApplicationController
  before_action :require_login

  def new
    @album = Album.find(params[:album_id])
    @track = Track.new(album_id: params[:album_id])
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      @album = @track.album
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def edit
    @track = Track.find(params[:id])
    render :edit
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
      render :edit
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  def track_params
    params.require(:track).permit(:album, :title, :ord)
  end

end
