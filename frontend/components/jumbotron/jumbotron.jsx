import React from 'react';

class Jumbotron extends React.Component {

    render() {

        // var httpRequest = new XMLHttpRequest();
        // httpRequest.addEventListener('load', clipsLoaded);
        // httpRequest.open('GET', 'https://api.twitch.tv/kraken/clips/top?limit=10&game=Overwatch&trending=true');
        // httpRequest.setRequestHeader('Client-ID', 'spmus28uykcb190xqkv0abkh1uvwnc');
        // httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
        // httpRequest.send();

        // function clipsLoaded() {
        //     var clipsDisplay = document.getElementById('featured-videos'),
        //         clipList = JSON.parse(httpRequest.responseText);
        
        //     clipList.clips.forEach(function(clip, index, array) {
        //         clipItem = document.createElement('div');
        //         clipItem.innerHTML = clip.embed_html;
        //         clipsDisplay.appendChild(clipItem);
        //     });
        // }


        return (

            <>
                <div className="jumbotron">
                    <iframe
                        src="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch&autoplay=false"
                        height="600"
                        width="86%"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                    </iframe>
                </div>

                <div className="featured-videos"></div>
                <div>
    
                </div>
            </>
        )
    }
}

export default Jumbotron;