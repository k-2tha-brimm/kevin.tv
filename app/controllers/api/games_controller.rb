class Api::GamesController < ApplicationController

    def index
        @games = Game.all
        render "api/games/index.json.jbuilder"
    end

    def show
        @game = Game.find_by!(id: params[:id])
        if @game
            render 'api/games/show.json.jbuilder'
        else
            render json: @game.errors.full_messages, status: 418
        end
    end

    private

    def game_params
        params.require(:game).permit(:title)
    end

end