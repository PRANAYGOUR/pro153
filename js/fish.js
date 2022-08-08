// Registefish component in Target.js

AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + (-50));      
        var posY = (Math.random() * 5 + (-5));
        var posZ = (Math.random() *60 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createfishes(id, position);
      }
    } ,
  
    createfishes: function(id, position) { 
     const fishModel = document.querySelector("#fishModels");
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
      fishEl.setAttribute("rotation", { x: 0, y: 180, z: 0 }); 
      fishEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
      fishEl.setAttribute("animation", { property: "position", to: "100 10 -20", loop: "true", dur: 20000 }); 
      fishEl.setAttribute("animation-mixer", {});
      fishModel.appendChild(fishEl)
      }
  });
  
  