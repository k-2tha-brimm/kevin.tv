class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

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
        params.require(:user).permit(:username, :password, :date_of_birth, :email)
    end
end