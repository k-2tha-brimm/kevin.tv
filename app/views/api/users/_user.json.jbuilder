json.users do
    json.set! user.id do
        json.extract! user, :username, :email
    end
end