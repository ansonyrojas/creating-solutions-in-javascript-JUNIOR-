

/*Take student attendance and check who passed and who failed*/



let amount = prompt("¿ How many students are ?");
let totalstudents = [];


for (i = 0; i < amount; i++){

	totalstudents[i] = [prompt("Student's name" + (i+1)),0];

}

const tomarAsistencia = (name,p) =>{

		let presencia = prompt(name);
		if(presencia == "p" || presencia=="P") {

			totalstudents[p][1]++;
		}

}

for (i = 0; i < 30; i++){

	for(student in totalstudents){

		tomarAsistencia(totalstudents[student][0],student);
	}
}


for (student in totalstudents){

	let result = `${totalstudents[student][0]}: <br>
	_______Present: ${totalstudents[student][1]} <br>
	_______Absences: ${30 - parseInt(totalstudents[student][1])}	
	`;

	if(30 - totalstudents[student][1] > 18){

		result += " <b style='color:red'> REPROVED FOR non-attendance</b><br><br>"

	}else{

		result += "<br><br>"
	}

	document.write(result);
}