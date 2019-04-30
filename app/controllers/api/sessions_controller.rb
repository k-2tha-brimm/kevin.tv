class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ['Invalid Login Credentials'], status: 401
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
