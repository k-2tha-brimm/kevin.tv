class Api::GamesController < ApplicationController

    def index
        @games = Game.all
        render json: 'api/games'
    end

    def show
        @game = Game.find(params[:id])
        if @game
            render json: 'api/games/show'
        else
            render json: @game.errors.full_messages, status: 418
        end
    end

    private

    def game_params
        params.require(:game).permit(:title)
    end

end