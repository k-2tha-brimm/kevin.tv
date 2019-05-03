class User < ApplicationRecord

    attr_reader :password

    def self.find_user_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
    
    after_initialize :ensure_session_token

    validates :username, :session_token, :email, uniqueness: true, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }
    validates :password_digest, presence: true

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def month=(month)
        @month = month
    end

    def day=(day)
        @day = day
    end

    def year=(year)
        @year = year
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end
