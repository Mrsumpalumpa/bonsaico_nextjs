import * as THREE from 'three';
import React, { useEffect,useRef,useState } from 'react'

const PolihedronComponent = () => {
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
           camera.position.set(0, 0, 3)
           // Poliedron
           const vert = [
            1, 1, 1,
            -1, -1, 1,
            -1, 1, -1,
            1, -1, -1
            ]
            // prettier-ignore
            const ind = [
                2, 1, 0,
                0, 3, 2,
                1, 3, 0,
                2, 3, 1
            ]
           const geometry = new THREE.PolyhedronGeometry(vert,ind)
           
           const material = new THREE.MeshPhongMaterial({ color: 0xff0000 })
           /*new THREE.MeshStandardMaterial({
              //color: 'orange',
              //wireframe:true,
              color: new THREE.Color(1, 1, 0),
              emissiveIntensity: 0.8,
              emissive: new THREE.Color(1, 0, 0)
           })*/
           const polihedron = new THREE.Mesh(geometry, material)
           scene.add(polihedron)
           //light
            const light  = new THREE.DirectionalLight(0xffffff,70)
            light.position.z = 3
            scene.add(light)
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
              polihedron.rotation.x += 0.005
              polihedron.rotation.y += 0.01
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

export default PolihedronComponent
