var mainApp = {};
(function(){
	var firebase = app_fireBase;
	var uid = null;
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
     
	
 //get elements
 const uList = document.getElementById('table_body');
 const uList2= document.getElementById('table_body2');

//database reference 
 const dbRefObject = firebase.database().ref().child('User_data');
var k=0;
var p= 0;
var saveStateGrades = {};
var saveStateTitle = {};
var saveStateGradesStats = {};
var saveStateTitleStats = {};
var saveStateTimesSeenStats = {};

 
 
firebase.database().ref('User_data').once('value').then(function(snapshot) {
 

    snapshot.forEach(function(snapshot1) {
    
    var uid= snapshot1.key;
    //saveState.uid = uid;
    
    
   firebase.database().ref('User_data').on("value", function(snapshot) {
  	tsnapshot.numChildren()
});
 




	for (var i = 0; i <snapshot1.val().value.length ; i++) {
		
 const dbRefList = dbRefObject.child(uid).child('value').child(i);



 dbRefList.once('value' , function(snapshot)
 {
     if (snapshot.exists()) {
    k=k+1;
    var flag = 0;
 	var description = (snapshot.val().description)
 	var ects = (snapshot.val().ects)
 	var grade = (snapshot.val().grade)
 	var projects = (snapshot.val().projects)
 	var semester = (snapshot.val().semester)
 	var title = (snapshot.val().title)
 	

 	saveStateTitle[p]=title;
 	saveStateGrades[p]= grade;
 	

    

            var lengthOfList = Object.keys(saveStateTitleStats).length;

 	for (var j = 0; j < lengthOfList; j++) {
 		if (saveStateTitle[p]==saveStateTitleStats[j]&& lengthOfList>1) {
 			saveStateGradesStats[j]=saveStateGradesStats[j]+ grade;
 			saveStateTimesSeenStats[j]++;
 			flag = 1;
 			break;

 		}  
 	}
 	if (flag==0){
 			saveStateTitleStats[lengthOfList]=saveStateTitle[p];
 			saveStateGradesStats[lengthOfList]=saveStateGrades[p];
 			saveStateTimesSeenStats[lengthOfList]=1;

 		      }
 	 	if(Object.getOwnPropertyNames(saveStateTitleStats).length == 0) {
 		saveStateTitleStats[p]=title;
 		saveStateGradesStats[p]=grade;
 		saveStateTimesSeenStats[p]=1;
 		
 	} 
      // console.log(saveStateGradesStats, saveStateTimesSeenStats,saveStateTitleStats);
      // console.log(Object.keys(saveStateTitleStats).length);






   
   	
   
    

 	

 	

 	
    
 
 	const tr = document.createElement('tr');
 	const td1 = document.createElement('td');
 	const td2 = document.createElement('td');
 	const td3 = document.createElement('td');
 	const td4 = document.createElement('td');
 	const td5 = document.createElement('td');
 	const td6 = document.createElement('td');
 	const td9 = document.createElement('td');
 	

 	 td1.innerText = title;
	 uList.appendChild(td1);
	 td2.innerText = description;
	 uList.appendChild(td2);
	 td3.innerText = grade;
	 uList.appendChild(td3);
	 td4.innerText= semester;
	 uList.appendChild(td4);
	 td5.innerText= projects;
	 uList.appendChild(td5);
	 td6.innerText = ects;
	 uList.appendChild(td6);
	 td9.innerText=uid;
	 uList.appendChild(td9);
	 uList.appendChild(tr);
	 
     
    p=p+1;

        if(table_body2.rows.length!==0){
   
        while(table_body2.hasChildNodes())
               {
                 table_body2.removeChild(table_body2.firstChild);
                } 
        
   }

   for (var u = 0; u < Object.keys(saveStateTitleStats).length; u++) {
 
 	 const td7 = document.createElement('td');
 	 const td8 = document.createElement('td');
 	 const td10 = document.createElement('td');
 	 const tr1 = document.createElement('tr');
	 td7.innerText = saveStateTitleStats[u];
	 uList2.appendChild(td7);
	 grades_stats =saveStateGradesStats[u]/saveStateTimesSeenStats[u];
	 td8.innerText = grades_stats.toFixed(2);
	 uList2.appendChild(td8);
	 td10.innerText = saveStateTimesSeenStats[u];
	 uList2.appendChild(td10);
	 uList2.appendChild(tr1);
     }

 } 	 
 	 



    
 

 });

}

 });

});  



 


  }else {
  	uid=null;
  	window.location.replace("login.html");

  }
});
	function logOut(){
		firebase.auth().signOut();
	}

	mainApp.logOut = logOut;




})()

 	






