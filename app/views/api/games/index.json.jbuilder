# json.array! @games do |game|
#     json.extract! game, :id, :title
#     json.photoUrl url_for(game.photo)
# end

@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title
        json.photoUrl url_for(game.photo)
    end
end