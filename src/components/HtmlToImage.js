import {useState} from 'react';
import Visualization from './Visualization'
import * as htmlToImage from 'html-to-image';

const HtmlToImage = ({data, saveAs, }) =>{

  const [time, setTime] = useState(0)

  const exportAsPicture = () => {
    
    var t0 = performance.now()

    var data = document.getElementsByClassName('htmlToImageVis')

    for (var i = 0; i < data.length; ++i){
        htmlToImage.toPng(data[i]).then((dataUrl) => {
          saveAs(dataUrl, 'my-node.png');
        });
    }

    var t1 = performance.now()

    var t = t1 - t0

    setTime(t.toFixed(3))

  }

  return <div>
      <h1>HTML TO IMAGE</h1>
        {data.map(vis=>{
          return <Visualization visualization={vis} className="htmlToImageVis"/>
      })}
        <button onClick={exportAsPicture}>capture</button>
        <p>TOTAL TIME: {time} ms</p>
  </div>
};

export default HtmlToImage;