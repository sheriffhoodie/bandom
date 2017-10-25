class Api::UsersController < ApplicationController

  def new
  end

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
