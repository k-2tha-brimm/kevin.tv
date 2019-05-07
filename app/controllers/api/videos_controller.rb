class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render "api/users/show.json.jbuilder"
    end

    private

    def video_params
        params.require(:video).permit(:title, :game_id)
    end

end