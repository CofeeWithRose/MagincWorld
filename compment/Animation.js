function Animation(){
	this.name="Animation";
	var _pro=this;
	var render;
	var trans;
	var imgNum=0;
	var count=0;
	var anim;
	var animName;
	this.imageMap={};
	this.speed=1;
	this.start=function(){
      trans=_pro.transform;
      render=trans.getCompment("Render");
	};
	this.update=function(){
		if (anim&&anim.length>0) {
			if (Time.frameCount%_pro.speed==0) {
			   count++;
		    }
	     	render.setImage(anim[count%imgNum]);
		}
		
	};
	this.setAnimation=function(name,num,path){
	    var list=[];
        for (var i = num ; i >0; i--) {
      	   var img=new Image();
      	   img.src=path+"/"+name+i+".png";
           list.push(img);
        }
        _pro.imageMap[name]=list;
	};
	this.play=function(name){
		if (animName!==name) {
			animName=name;
	       anim=_pro.imageMap[name];
	       imgNum=anim.length;
        }
	};

	this.setSpeed=function(v){
		_pro.speed=v;
	};
	this.setImageMap=function(map){
		var names=Object.keys(map);
        for (var i = names.length - 1; i >= 0; i--) {
        	var imgList=map[names[i]];
        	_pro.imageMap[names[i]]=[];
        	for (var j = imgList.length - 1; j >= 0; j--) {
        		if(imgList[j]){
        			var img=new Image();
	        		img.src=(imgList[j].src);
	        		_pro.imageMap[names[i]].push(img);
        		}
        	
        	}
        }
	};

}