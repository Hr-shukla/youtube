import Header from "./Header";
import "./VideoPage.css"
function VideoPage(){
return(

<div className="">
<Header/> 
       <div className="VMainBody">
        <div className="Vsideb"></div>
            <div className="VMain">
                <div className="VVideo">
                    <div className="VPlay">
<iframe className="iframe" src="https://www.youtube.com/embed/HF-nGmIeoGU?si=ivYoq86H6dw8MDcZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                </div>
                <div className="VExtra">
                <div className="VTitle"><h3>Pawansut | Narci | Hindi Rap Song | Prod. By Narci</h3></div>
                <div className="VSubs">
                    <div className="VChannel">
                        <div className="VLogo"></div>
                        <div className="VName">
                            <div className="VCName">Narci</div>
                            <div className="VCSubs">16.5M Subscriber</div>
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
                <div className="VDescription">description</div>
                </div>
            </div>
            <div className="VSide">
            </div>
           
                </div> 
</div>
)

}
export default VideoPage;