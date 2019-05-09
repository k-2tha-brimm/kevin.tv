class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.date_of_birth = Date.new((params[:user][:year]).to_i, (params[:user][:month]).to_i, (params[:user][:day]).to_i)

        if @user.save
            login_user!(@user)
            render "api/users/show"
        else
            render json: ['Please try again.'], status: 422
        end
    end

    def show
        @user = User.find_by!(id: params[:id])
        if @user
            render "api/users/show.json.jbuilder"
        end
    end
    
    def update
        @user = User.find_by!(id: params[:id])
        @user.avatar.attach(params[:avatar])
        if @user.save
            render "api/users/show"
        else
            render json: ['Please try again.'], status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :month, :day, :year)
    end

end