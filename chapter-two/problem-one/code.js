
 
class CellPhone {

	constructor(color,weight,size,cr,ram){

		this.color = color;
		this.weight = weight;
		this.size = size;
		this.cameraResolution = cr;
		this.memoryRam = ram;
		this.switchedOn = false;
	}

	PressButtonswitchedOn(){

		if(this.switchedOn == false){

			alert("cell phone on");
			this.switchedOn = true;
		}else {

			alert("the cell phone is already turned off");
			this.switchedOn = false;
		}

	}

	restart(){

		if (this.switchedOn == true){

			alert("restarting cell phone");
		}else{

			alert("the cell phone is turned off");

		}
	}

	takePhotos(){

		alert(`photo taken in a resolution of: ${this.cameraResolution}`)
	}

	recordVideos(){

		alert(`recording video in ${this.cameraResolution}`)
	}

	mobileinfo(){

		return ` 
		Color: <b>${this.color}</b><br>
		weight: <b>${this.weight}</b><br>
		size: <b>${this.size}</b><br>
		Video resolution: <b>${this.cameraResolution}</b><br>
		Memory ram: <b>${this.memoryRam}</b><br>

		 `;
	}

}

class CellularHighEnd extends CellPhone{

	constructor(color,weight,size,cr,ram,cre){
		super(color,weight,size,cr,ram);
		this.cameraResolutionExtra = cre;


	}

	recordSlowVideo(){

		alert("You are recording in slow motion");
	}

	facialRecognition(){

		alert("let's start with facial recognition");
	}

	infoHighRange(){

		return  `<span style='border: solid 3px blue; display:inline-block; padding: 3px; background-color:rgba(51,255,233, 0.2)'> ${this.mobileinfo()} Extra Camera Resolution: ${this.cameraResolutionExtra} </span>`;

	}


}

 CellPhone1 = new CellPhone("red","150g","5'","Hd","1GB");
// CellPhone2 = new CellPhone("Black","155g","5.4'","Full Hd","2GB");
// CellPhone3 = new CellPhone("Blank","146g","5.9'","Full Hd","2GB");


/*It should be noted that this is an exercise and that it is only the idea embodied in a practice*/



 CellPhone1.PressButtonswitchedOn();
 CellPhone1.takePhotos();
 CellPhone1.recordVideos();
 CellPhone1.restart();
 CellPhone1.PressButtonswitchedOn();


CellPhone1 = new CellularHighEnd("red","130g","5.2'","4K","3GB","full hd");
CellPhone2 = new CellularHighEnd("black","142g","6'","4K","3GB","hd");

document.write(CellPhone1.mobileinfo() + "<br>");

document.write("<b style='color:red; border:solid 1px blue; padding:2px;'>Section for high-end cell phones</b>" + "<br><br>")

document.write(`

	${CellPhone1.infoHighRange()} <br><br>
	${CellPhone2.infoHighRange()} <br>


	`)