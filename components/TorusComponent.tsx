'use client'
import * as THREE from 'three';
import React, { useEffect,useRef,useState } from 'react'

const TorusComponent = () => {
    const [width, setWidth] = useState(50);
    const [height,setHeight] = useState(50)
    const elementRef = useRef<HTMLDivElement>(null);
  
  
    useEffect(() => {
      if(elementRef.current){
          
           // scene
           
           const scene = new THREE.Scene()
           
           // camera
           const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
           camera.position.set(0, 0, 3)
           // Torus
          
           const torusKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16),
            new THREE.MeshLambertMaterial({ color: 0xff0000 })
          )
          scene.add(torusKnot)
          
          const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
          directionalLight.position.z = 3
          scene.add(directionalLight)
           // responsiveness
           /*window.addEventListener('resize', () => {
              
              camera.aspect = width / height
              camera.updateProjectionMatrix()
              renderer.setSize(window.innerWidth, window.innerHeight)
              renderer.render(scene, camera)
           })*/
           // renderer
           const renderer = new THREE.WebGL1Renderer({alpha:true})
           renderer.setSize(width, height)
           renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
           // animation
           const animate=()=> {
              requestAnimationFrame(animate)
              torusKnot.rotation.x += 0.005
              torusKnot.rotation.y += 0.01
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

export default TorusComponent
