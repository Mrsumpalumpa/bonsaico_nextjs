'use client'
import * as THREE from 'three';
import React,{useEffect} from 'react'


const SphereComponent = () => {
    useEffect(()=>{
        //scene + geo + material
        const scene = new THREE.Scene()
        scene.background= new THREE.Color('#ffffff')
        const geometry = new THREE.SphereGeometry(3,64,64)
        const material = new THREE.MeshStandardMaterial({
            color:' #ffff33',
        
        })
        //mesh
        const mesh = new THREE.Mesh(geometry,material)
        scene.add(mesh)
        //sizes
        const sizes = {
            width: window.innerWidth,
            height:window.innerHeight
        }
        //light
        const light  = new THREE.PointLight(0xffffff,70,100)
        light.position.set(6,7,8)
        scene.add(light)
        //camera
        const camera = new THREE.PerspectiveCamera(45,sizes.width/ sizes.height,0.1,100)
        camera.position.z= 9
        
        scene.add(camera)
        //renderer
        const canvas = document.querySelector('.webgl') as HTMLCanvasElement
        const renderer = new THREE.WebGL1Renderer({canvas})
        renderer.setSize(sizes.width,sizes.height)
        renderer.render(scene,camera)
        //controls
        
        //resize
        window.addEventListener('resize',()=>{
            //update sizes
            sizes.width=window.innerWidth
            sizes.height=window.innerHeight
            //camera
            camera.aspect = sizes.width/sizes.height
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width,sizes.height)
        })
        const loop =()=>{
            renderer.render(scene,camera)
            window.requestAnimationFrame(loop)
        }
        loop()
    },[])
return (
      <canvas className='webgl mx-auto'>
        
      </canvas>
    )
}
  
  export default SphereComponent