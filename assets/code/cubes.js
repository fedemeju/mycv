// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
// camera.position.z = 5;

// var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setClearColor("#e5e5e5");
// renderer.setSize(window.innerWidth,window.innerHeight);

// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () =>{
//   renderer.setSize(window.innerWidth,window.innerHeight);
//   camera.aspect = window.innerWidth/window.innerHeight;

//   camera.updateProjectionMatrix();
// })

// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth,window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;

//   camera.updateProjectionMatrix();
// })


//   // var geometry = new THREE.SphereGeometry(0.5, 100 ,100);
//   // var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
//   // var mesh = new THREE.Mesh(geometry,material);
//   // mesh.position.x = (Math.random() -0.5) *10;
//   // mesh.position.y = (Math.random() -0.5) *10;
//   // mesh.position.z = (Math.random() -0.5) *10;
//   // scene.add(mesh);



// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();

// var geometry = new THREE.BoxGeometry(.5, .5,.5);
// var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
// //   var mesh = new THREE.Mesh(geometry,material);

// meshX = -10;

// for(var i = 0; i<55; i++){
//   var mesh = new THREE.Mesh(geometry,material);
//   mesh.position.x = (Math.random() -0.5) *10;
//   mesh.position.y = (Math.random() -0.5) *10;
//   mesh.position.z = (Math.random() -0.5) *10;
//   scene.add(mesh);
//   meshX += 1;
// }


// var geometry = new THREE.BoxGeometry(.8, .8,.8);
// var material = new THREE.MeshLambertMaterial({color: 0xffa500});
// var mesh = new THREE.Mesh(geometry,material);
// mesh.position.x = (Math.random() -0.5) *10;
// mesh.position.y = (Math.random() -0.5) *10;
// mesh.position.z = (Math.random() -0.5) *10;
// scene.add(mesh);


// //   to move it
// //   mesh.position.x = 2;
// //   mesh.position.y = 1;
// //   mesh.position.z = 1;

// //   mesh.position.set(2,1,1);
// //   mesh.rotation.set(-25,0,1);
// //   mesh.scale.set(3,1,1)



// var light = new THREE.PointLight(0xFFFFFF,1,1000);
// light.position.set(0,0,0);
// scene.add(light);

// var light = new THREE.PointLight(0xFFFFFF,1,1000);
// light.position.set(0,0,20);
// scene.add(light);

// var render = function() {
//   requestAnimationFrame(render);

//   // mesh.rotation.x += 0.05;
//   // mesh.rotation.y += 0.05;
//   // mesh.scale.x += 0.0005;

//   renderer.render(scene,camera);
// }

// function onMouseMove(event) {
//   event.preventDefault();

//   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

//   raycaster.setFromCamera(mouse, camera);

//   var counter = 0;

//   var intersects = raycaster.intersectObjects(scene.children, true);
//   for (var i = 0; i < intersects.length; i++) {
//       if(counter % 2 == 0){
//           this.tl = new TimelineMax();
//           this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
//           this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut})
//           this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut})
//           this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
//       }else{
//         this.tl = new TimelineMax();
//         this.tl.to(intersects[i].object.scale, 1, {y: 2, ease: Expo.easeOut})
//         this.tl.to(intersects[i].object.position, .5, {y: 2, ease: Expo.easeOut})
//         this.tl.to(intersects[i].object.position, .5, {x: -2, ease: Expo.easeOut})

//       }
//       counter += 1;
     
//   }
// }


// var valid = 0;



// window.addEventListener('mousemove', onMouseMove);
// render();


// Crear escena
var scene = new THREE.Scene();

// Configurar cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configurar renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajustar tamaño en redimensionamiento de ventana
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Raycaster y mouse para interacción
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Crear geometría y material para las cajas
var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshLambertMaterial({ color: 0xF7F7F7 });

// Añadir múltiples cajas con animación flotante
for (var i = 0; i < 55; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    );
    scene.add(mesh);

    // Animación flotante con GSAP
    gsap.to(mesh.position, {
        y: mesh.position.y + 0.5,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });
}

// Añadir una caja naranja con animación flotante
var orangeMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
var orangeBox = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), orangeMaterial);
orangeBox.position.set(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
);
scene.add(orangeBox);

// Animación flotante para la caja naranja
gsap.to(orangeBox.position, {
    y: orangeBox.position.y + 0.5,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

// Añadir luces
var light1 = new THREE.PointLight(0xFFFFFF, 1, 1000);
light1.position.set(0, 0, 0);
scene.add(light1);

var light2 = new THREE.PointLight(0xFFFFFF, 1, 1000);
light2.position.set(0, 0, 20);
scene.add(light2);

// Función para detectar el movimiento del ratón e interactuar con las cajas
function onMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
        gsap.to(intersects[i].object.scale, { x: 2, y: 2, z: 2, duration: 0.5, ease: "expo.out" });
        gsap.to(intersects[i].object.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 0.5, delay: 0.5, ease: "expo.out" });
    }
}

window.addEventListener('mousemove', onMouseMove);

// Bucle de renderizado
var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();
