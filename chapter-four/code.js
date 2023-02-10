


const subjects = {

	physical: [90,6,4,"physical"],
	math:[84,8,8,"math"],
	logic: [92,8,4,"logic"],
	chemistry: [96,8,4,"chemistry"],
	calculation: [91,6,3,"calculation"],
	programming: [79,7,4,"programming"],
	biology: [75,9,2,"biology"],
	bd: [98,9,1,"bd"],
	algebra: [100,10,4,"algebra"]
}


const approved = ()=>{

		for (subject in subjects){

			let assists = subjects[subject][0];
			let average = subjects[subject][1];
			let jobs = subjects[subject][2];
			
			console.log(subjects[subject][3]);	
			
			if (assists >= 90){



				console.log("%c   attendance in order","color:green");
			}else{

				console.log("%c   high attendance","color:red");
			}

			if (average >= 7){

				console.log("%c   average in order","color:green");

			}else{

				console.log("%c   failing average","color:red");
			}

			if (jobs >= 3){

				console.log("%c   practical work in order","color:green");

			}else{

				console.log("%c  lack of practical work","color:red");
			}
		}

}

approved();