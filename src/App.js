import './App.css'
import ColorPicker from './components/C1'

function App() {

  const colors = [
    'red',
    'blue',
    'green',
    'coral',
    'magenta',
    'yellow',
    'black',
    'whitesmoke',
    'lightgreen',
    'cyan',
    'pink',
    'violet',
    'grey',
    '#F2BE22',
    '#9AC5F4',
    '#2B2A4C'
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors}/>
    </div>
  )
}

export default App;