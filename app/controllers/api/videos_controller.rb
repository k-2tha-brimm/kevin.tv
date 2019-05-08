class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render "api/users/show.json.jbuilder"
    end

    def create
        @video = Video.new(video_Params)
        @video.streamer_id = current_user.id 

        if @video.save
            
        else

        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :game_id)
    end

end