class Api::VideosController < ApplicationController

    def index
        @videos = current_user.videos
        render "api/users/show.json.jbuilder"
    end

    private

    def video_params
        params.require(:video).permit(:title, :game_id)
    end

end