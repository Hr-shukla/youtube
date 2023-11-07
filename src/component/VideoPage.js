import { useParams } from "react-router-dom";
import Header from "./Header";
import SuggestedVideo from "./SuggestedVideo";
import "./VideoPage.css";
import videos from "./video.json";
function VideoPage(){
    const Params = useParams();
    const id = Params.id;
    function  finderFunction(video){
        return video.id == id ;
    }

    const video = videos.find(finderFunction);
return(

<div className="">
<Header/> 
       <div className="VMainBody">
        <div className="Vsideb"></div>
            <div className="VMain">
                <div className="VVideo">
                    <div className="VPlay">
<iframe className="iframe" src={"https://www.youtube.com/embed/" + id + "?rel=0&mute=1&autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                </div>
                <div className="VExtra">
                <div className="VTitle">{video.title}</div>
                <div className="VSubs">
                    <div className="VChannel">
                        <div className="VLogo"></div>
                        <div className="VName">
                            <div className="VCName">{video.channelName}</div>
                            <div className="VCSubs">{video.views}</div>
                        </div>
                        <div className="VSubscriber"><p><center>Subscribe</center></p></div>
                    </div>
                    <div className="VLike">

                            <div className="VLike-1">
                            <div className="VLike-1-1"></div><div className="VLike-1-2"></div>
                            </div>
                            <div className="VLike-2">2</div>
                            <div className="VLike-3">3</div>
                            <div className="VLike-4">4</div>
                            <div className="VLike-5">5</div>
                            
                    </div>
                   
                </div>
                <div className="VDescription">description
                </div>
                </div>
            </div>
            <div className="VSide">
            {
            videos.map(function(video){
                return <SuggestedVideo 
                title={video.title}
                thumbnail={video.thumbnail.url}
                channelName={video.channelName}
                viewCount={video.views}
                uploded={video.uploadedAt}
                 />

            })}
            <div className="suggestions">
            <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
        </div>
            </div>
           
                </div> 
</div>
)

}
export default VideoPage;