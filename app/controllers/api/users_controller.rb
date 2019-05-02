class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        # @user.date_of_birth = Date.new(params[:user][:year], params[:user][:month], params[:user][:day])

        if @user.save
            login_user!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by!(id: params[:id])

        if @user
            render "api/users/show.json.jbuilder"
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

    def date_params
        params.require(:user).permit(:month, :day, :year)
    end

end