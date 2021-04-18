import Visualization from './Visualization'
import html2canvas from "html2canvas";

const HtmlToCanvas = ({data, saveAs}) =>{

    const exportAsPicture = () => {

        debugger
        
        var data = document.getElementsByClassName('htmlToCanvasVis')

        for (var i = 0; i < data.length; ++i){
            html2canvas(data[i]).then((canvas)=>{
                var image = canvas.toDataURL('image/png', 1.0);
                return image
            }).then((image)=>{
                saveAs(image, 'exported-vis.png') 
            })
        }

      }

    return <div>
        <h1>HTML TO CANVAS</h1>
        {data.map(vis=>{
            return <Visualization visualization={vis} className="htmlToCanvasVis" fromCanvas/>
        })}
        <button onClick={exportAsPicture}>capture</button>
    </div>
};

export default HtmlToCanvas;