import React from 'react';
import './App.css';
//import UseRef from './UseRef'
import useWebAnimations,{bounce} from '@wellyshen/use-web-animations'
function App() {

  const {ref,playState,getAnimation} = useWebAnimations({...bounce})
  // const { ref, playState, getAnimation } = useWebAnimations({
  //   keyframes: [
  //     { transform: "translateX(50px)" },
  //     { transform: "translateX(1100px)" }
  //   ],
  //   timing: {
  //     duration: 5000,
  //     iterations: Infinity,
  //     direction: "alternate",
  //     easing: 'ease-in-out',
  //   },
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //   },
  // })
  return (
    <div className='App' >
      {/* <UseRef></UseRef> */}
      <h1 ref={ref} style={{ background: 'pink', width: '200px' }}>Hello World</h1>
      <h4>Animation Playstate : {playState}</h4>
      <button onClick={() => {
        getAnimation().play();
      }}>Play</button>
      <button onClick={() => {
        getAnimation().pause();
      }}>Pause</button>

      
    </div>
  );
}

export default App;
