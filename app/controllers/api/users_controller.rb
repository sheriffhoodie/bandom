class Api::UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :json
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
  end

  def edit
  end

  def show
  end

  def destroy
  end

  def edit
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
