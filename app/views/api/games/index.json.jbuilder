json.array! @games do |game|
    json.partial! 'api/games/game', game: @game
end