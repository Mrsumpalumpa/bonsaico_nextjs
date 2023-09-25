'use client'
import * as THREE from 'three';
import React,{useEffect,useRef,useState} from 'react'

const CubeComponent = () => {
  const [width, setWidth] = useState(50);
  const [height,setHeight] = useState(50)
  const elementRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(elementRef.current){
        
         // scene
         const scene = new THREE.Scene()
         scene.background = new THREE.Color("black")
         // camera
         const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
         camera.position.set(0, 0, 10)
         // cube
         const geometry = new THREE.BoxGeometry(4, 4, 4)
         const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
         })
         const cube = new THREE.Mesh(geometry, material)
         scene.add(cube)
         // responsiveness
         /*window.addEventListener('resize', () => {
            
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera)
         })*/
         // renderer
         const renderer = new THREE.WebGL1Renderer()
         renderer.setSize(width, height)
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
         // animation
         const animate=()=> {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.005
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
        }
         // rendering the scene
         const container = document.querySelector('#threejs-container')
         container?.append(renderer.domElement)
         renderer.render(scene, camera)
         animate()
    }
  }, []);

  return (
  
    <div ref={elementRef} id='threejs-container' >
      
       
    </div>
  );
    

  
}

export default CubeComponent
