class Api::SessionsController < ApplicationController

    def create
        # @user = User.find_user_by_credentials(params[:user][:username], params[:user][:password])
        @user = User.find_by!(username: params[:user][:username])
        if @user
            login_user!(@user)
            render '/api/users/show'
        else
            render json: ['Invalid Credentials'], status: 401
        end
    end

    def destroy
        @user = current_user
        
        if @user
            logout_user!
            render 'api/users/show'
        else
            render json: ['You must be signed in to do that'], status: 404
        end
    end
    
end
