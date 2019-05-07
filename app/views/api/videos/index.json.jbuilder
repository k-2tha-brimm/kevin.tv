json.streamer do
    json.set! @user.id do
        json.extract! @user, :id, :username
    end
end

if @user.videos
    json.videos do
        @user.videos.each do |video|
            json.set! video.id do
                json.extract! video, :id, :title, :stremer_id, :game_id
            end
        end
    end
end