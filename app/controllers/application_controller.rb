class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    protect_from_forgery unless: -> { request.format.json? }

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login_user!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout_user!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
