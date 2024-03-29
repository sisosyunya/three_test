import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react';
import './App.css';
import {config,useSpring,animated} from "@react-spring/three"
import ResponsiveAppBar from './components/Header'

function Box(props:any){
const ref:any = useRef();
const [Clickd,setClick] =useState(false)
const [Hoverd,setHover] =useState(false)
// fiberのライブらり
  useFrame(()=>(ref.current.rotation.x += 0.01));

  const {scale} =useSpring({
    scale:Clickd ? 2:1,
    config:config.wobbly,
  })

  return(
    <mesh
    // スプレッド構文らしい
    {...props}
    ref={ref} 
    // onClickでスケールをtrueの時２倍、falseの時は１倍にする
    onClick ={()=>setClick(!Clickd)} 
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    scale={Clickd ? 2 : 1 }
    >

      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={Hoverd ? "hotpink" :"yellow"}/>
    </mesh>
  )
}

function App() {
  return (
    <>
    <ResponsiveAppBar />
    <div id = "canvas-container">
      <Canvas>
        {/* meshは３Dオブジェクトのこと */}
        {/* positionは減点から-2した感じ */}
          <Box position={[-1.6,0,0]} />
          <Box position={[1.6,0,0]} />
          {/* <boxGeometry args={[2,2,2]} /> */}
          <ambientLight intensity={0.5}/>
          <spotLight position={[10,10,10] }angle={0.15} penumbra={1} />
        <pointLight position={[-10,-10,-10]} />
      </Canvas>
    </div>
    <h1>Threejs Fiber</h1>
    <a href="">もっとみる</a>
    </>
  );
}

export default App;
