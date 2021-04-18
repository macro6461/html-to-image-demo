import Visualization from './Visualization'
import * as htmlToImage from 'html-to-image';

const HtmlToImage = ({data, saveAs, }) =>{

    const exportAsPicture = () => {
        
        var data = document.getElementsByClassName('htmlToImageVis')

        debugger

        for (var i = 0; i < data.length; ++i){
            htmlToImage.toPng(data[i])
            .then(function (dataUrl) {
              saveAs(dataUrl, 'my-node.png');
            });
        }

      }

    return <div>
        <h1>HTML TO IMAGE</h1>
         {data.map(vis=>{
            return <Visualization visualization={vis} className="htmlToImageVis"/>
        })}
          <button onClick={exportAsPicture}>capture</button>
    </div>
};

export default HtmlToImage;