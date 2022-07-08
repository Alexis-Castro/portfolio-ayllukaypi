import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


export const VideoYT = () => {
   return (
      <>
         <LiteYouTubeEmbed 
            id='qWbvm8kpfTs'
            
            title='Villa los Parques'
            playlist={false}
            cookie={true}
            poster={"maxresdefault"}
            webp={true}
         />
      </>
   )
}
