import {useState} from 'react';
import Visualization from './Visualization'
import html2canvas from "html2canvas";

const HtmlToCanvas = ({data, saveAs}) =>{

    const [time, setTime] = useState(0)

    const exportAsPicture = () => {

        var t0 = performance.now()
        
        var data = document.getElementsByClassName('htmlToCanvasVis')

        for (var i = 0; i < data.length; ++i){
            html2canvas(data[i]).then((canvas)=>{
                var image = canvas.toDataURL('image/png', 1.0);
                saveAs(image, 'exported-vis.png') 
            })
        }

        var t1 = performance.now()

        var t = t1 - t0

        setTime(t.toFixed(3))

      }

    return <div>
        <h1>HTML TO CANVAS</h1>
        {data.map(vis=>{
            return <Visualization visualization={vis} className="htmlToCanvasVis" fromCanvas/>
        })}
        <button onClick={exportAsPicture}>capture</button>
        <p>TOTAL TIME: {time} ms</p>
    </div>
};

export default HtmlToCanvas;