json.array! @games do |game|
    json.extract! game, :id, :title
    json.photoUrl url_for(game.photo)
end