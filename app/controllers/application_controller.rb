class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login_user!(user)
        if user
            session[:session_token] = user.session_token
        else
            flash[:errors] = ['Invalid Sign-in Credentials']
        end
    end

    def logout_user!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

end
