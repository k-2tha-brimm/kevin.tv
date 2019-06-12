# json.partial! "api/games/game", game: @game
json.game do
    json.extract! @game, :id, :title
    json.photoUrl url_for(@game.photo)
    # json.backgroundUrl url_for(@game.background)
end

json.streamers do
    @game.streamers.each do |streamer|
        json.set! streamer.id do 
            json.partial! '/api/users/user', user: streamer
        end
    end
end

json.streams do 
    @game.streams.each do |stream|
        json.set! stream.id do
            json.extract! stream, :id, :streamer_id, :title, :game_id
            json.thumbUrl url_for(stream.thumbnail)
        end
    end
end