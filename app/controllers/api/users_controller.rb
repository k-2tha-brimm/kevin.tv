class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            flash[:errors] = @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by!(params[:id])

        if @user
            render json: :show
        end

    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :date_of_birth, :email)
    end
end
