# json.game do
#     json.extract! @game, :id, :title
#     json.photoUrl url_for(@game.photo)
#     # json.backgroundUrl url_for(@game.background)
# end

json.streamer do
    json.set! @user.id do 
        json.extract! @user, :id, :username
    end
end

if @user.stream
    json.stream do 
        json.set! @user.stream.id do
            json.extract! @user.stream, :id, :streamer_id, :title
        end
    end
end

if @user.game
    json.game do
        json.set! @user.game.id do
            json.extract! @user.game, :id, :title
        end
    end
end