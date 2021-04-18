import HtmlToCanvas from './components/HtmlToCanvas';
import HtmlToImage from './components/HtmlToImage';
import visualizations from './visualizations.js';
import './App.css';

function App() {
  
  const saveAs = (blob, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
  }

  return (
    <div className="App">
      <HtmlToCanvas data={visualizations} saveAs={saveAs}/>
      <HtmlToImage data={visualizations} saveAs={saveAs}/>
    </div>
  );
}

export default App;
