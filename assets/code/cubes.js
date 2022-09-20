var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () =>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;

  camera.updateProyectionMatrix();
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})


//   creo y agrego la esfera a la escena
//   var geometry = new THREE.SphereGeometry(1, 100 ,100);
//   var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
//   var mesh = new THREE.Mesh(geometry,material



var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(.5, .5,.5);
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
//   var mesh = new THREE.Mesh(geometry,material);

meshX = -10;

for(var i = 0; i<55; i++){
  var mesh = new THREE.Mesh(geometry,material);
  mesh.position.x = (Math.random() -0.5) *10;
  mesh.position.y = (Math.random() -0.5) *10;
  mesh.position.z = (Math.random() -0.5) *10;
  scene.add(mesh);
  meshX += 1;
}


var geometry = new THREE.BoxGeometry(.8, .8,.8);
var material = new THREE.MeshLambertMaterial({color: 0xffa500});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.x = (Math.random() -0.5) *10;
mesh.position.y = (Math.random() -0.5) *10;
mesh.position.z = (Math.random() -0.5) *10;
scene.add(mesh);


//   to move it
//   mesh.position.x = 2;
//   mesh.position.y = 1;
//   mesh.position.z = 1;

//   mesh.position.set(2,1,1);
//   mesh.rotation.set(-25,0,1);
//   mesh.scale.set(3,1,1)


var light = new THREE.PointLight(0xFFFFFF,1,1000);
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF,1,1000);
light.position.set(0,0,20);
scene.add(light);

var render = function() {
  requestAnimationFrame(render);

  // mesh.rotation.x += 0.05;
  // mesh.rotation.y += 0.05;
  // mesh.scale.x += 0.0005;

  renderer.render(scene,camera);
}

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  for (var i = 0; i < intersects.length; i++) {
      this.tl = new TimelineMax();
      this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
      this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut})
      this.tl.to(intersects[i].object.position, (Math.random() -0.5) *20, {x: 2, ease: Expo.easeOut})
      this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
  }
}


var valid = 0;



window.addEventListener('mousemove', onMouseMove);
render();


