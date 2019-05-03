# json.partial! "api/games/game", game: @game

json.extract! @game, :id, :title
json.photoUrl url_for(@game.photo)