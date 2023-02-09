class App{

	constructor(nameApp,downloads,punctuation,weight){
		this.nameApp = nameApp;
		this.downloads = downloads;
		this.punctuation = punctuation;
		this.weight = weight;
		this.started = false;
		this.installed = false;

	}

	open(){

		if(this.started == false && this.installed == true){

			this.started = true;

			alert("app started");

		}
	}

		close(){

		if(this.started == true && this.installed == true){

			this.started == false;

			alert("app closed");

		}
	}

	install(){

		if(this.installed == false){
			
			this.installed = true;
			
			alert("app installed successfully");

			
		
	}
}

	uninstall(){

		if(this.installed == true){

			this.installed = false;
			
			alert("app uninstalled successfully");
		}
	}

	appInfo(){

		return `
		Name: <b>${this.nameApp}</b><br>
		downloads: <b>${this.downloads}</b><br>
		punctuation: <b>${this.punctuation}</b><br>
		weight: <b>${this.weight}</b><br>

		`
	}

}

app = new App("drinks.app","16.000","5 stars","900mb");
app2 = new App("Facebook.app","16.000","4 stars","400mb");
app3 = new App("Shark.app","16.000","4.5 stars","100mb");
app4 = new App("Climate.app","16.000","4.8 stars","1gb");
app5 = new App("ebay.app","16.000","5 stars","250mb");
app6 = new App("hugo.app","17","3.7 stars","522mb");
app7 = new App("Futboll.app","42.982","2.9 stars","723mb");


app.install();
app.open();
app.close();
app.uninstall();

document.write (`
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()}

	`)