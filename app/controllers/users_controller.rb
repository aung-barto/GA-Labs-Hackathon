class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])

    @recs = Post.where({user_id: params[:id]})
    @count = @recs.count
  end
end
