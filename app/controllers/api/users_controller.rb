require 'open-uri'

class Api::UsersController < ApplicationController

    
    def index
        @users = User.all
        render 'api/users/index.json.jbuilder'
    end
    
    def create
        thumbnail = open('https://s3-us-west-1.amazonaws.com/app-seed-names/userthumbnail.jpeg')
        @user = User.new(user_params)
        @user.date_of_birth = Date.new((params[:user][:year]).to_i, (params[:user][:month]).to_i, (params[:user][:day]).to_i)
        @user.avatar.attach(io: thumbnail, filename: 'thumb')

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
    
    def update
        
        @user = User.find_by!(id: params[:id])
        @user.avatar.attach(params[:user][:avatar])
        if @user.save
            render json: "api/users/show"
        else
            render json: ['Please try again.'], status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :month, :day, :year)
    end

end