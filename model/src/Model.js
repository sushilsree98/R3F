
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Clone, useGLTF } from '@react-three/drei'

export default function Model() {
    // const model = useLoader(GLTFLoader,'./FlightHelmet/glTF/FlightHelmet.gltf',
    //     (loader)=>{
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath('./draco/');
    //         loader.setDRACOLoader(dracoLoader)
    //     }
    // ) 

    const model = useGLTF('./hamburger.glb') 

    return <>
            <Clone object={model.scene} scale={0.35} position-y={-1}/>
            <Clone object={model.scene} scale={0.35} position-y={0}/>
            <Clone object={model.scene} scale={0.35} position-y={1}/>
        </>

}

useGLTF.preload('./hamburger.glb')