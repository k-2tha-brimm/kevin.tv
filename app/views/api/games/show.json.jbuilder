# json.partial! "api/games/game", game: @game
json.game do
    json.extract! @game, :id, :title
    json.photoUrl url_for(@game.photo)
end

json.streamers do
    @game.streamers.each do |streamer|
        json.set! streamer.id do 
            json.partial! '/api/users/user', user: streamer
        end
    end
end