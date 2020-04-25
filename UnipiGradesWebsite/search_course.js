 
   function search() {

   
    var course_search = document.getElementById("search").value;


 
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
var title1= {};
var description1= {};
var grade1 = {};
var semester1 = {};
var projects1 = {};
var ects1 = {};
var uid1 = {};
var total_ects = 0;
var avg_grade = 0;
var l = 0;
var uid123 = document.getElementById("search").value;

firebase.database().ref('User_data').once('value').then(function(snapshot) {
 

    snapshot.forEach(function(snapshot1) {
    
    var uid= snapshot1.key;
    //saveState.uid = uid;
    
    
   




    for (var i = 0; i <10 ; i++) {
        
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
  





   
    
   
    

    

    
console.log(course_search);
    
    
 if (saveStateTitle[p]==course_search) {
    l=l+1;
 

     title1[l]=title;
     description1[l]=description;
     grade1[l]=grade;
     projects1[l]= projects;
     ects1[l]=ects;
     semester1[l]= semester;
     uid1[l]=uid;
     total_ects = total_ects + ects;
     avg_grade = avg_grade + grade;
      console.log(saveStateTitle);
 }
    
     
     
    p=p+1;

        if(table_body.rows.length!==0){
   
        while(table_body.hasChildNodes())
               {
                 table_body.removeChild(table_body.firstChild);
                } 
        
       } 

   for (var u = 0; u < Object.keys(saveStateTitleStats).length; u++) {
     for (var r = 0; r <= Object.keys(title1).length; r++) {
            
     
    if (saveStateTitleStats[u]==title1[r]){


     const td7 = document.createElement('td');
     const td8 = document.createElement('td');
     const td10 = document.createElement('td');
     const tr1 = document.createElement('tr');
     const tr = document.createElement('tr');
     const td2 = document.createElement('td');
     const td3 = document.createElement('td');
     const td4 = document.createElement('td');
     const td5 = document.createElement('td');
     const td6 = document.createElement('td');
     const td1 = document.getElementById('td7');
     const td9 = document.getElementById('td8');

     td7.innerText = saveStateTitleStats[u];
     uList.appendChild(td7);
     td2.innerText = description1[r];
     uList.appendChild(td2);
     td3.innerText = grade1[r];
     uList.appendChild(td3); 
     td4.innerText= semester1[r];
     uList.appendChild(td4);
     td5.innerText= projects1[r];
     uList.appendChild(td5);
     td6.innerText = ects1[r];
     uList.appendChild(td6);
     grades_stats =saveStateGradesStats[u]/saveStateTimesSeenStats[u];
     td8.innerText = grades_stats.toFixed(2);  
     uList.appendChild(td8);
     td10.innerText = uid1[r];
     uList.appendChild(td10);
     uList.appendChild(tr1);

     td1.innerText= total_ects;
     uList2.appendChild(td1);
     avg_grade1= avg_grade/l;
     td9.innerText= avg_grade1.toFixed(2);
     uList2.appendChild(td9);
     }
 }
     }

 }   
     



    
 

 });

}

 });

}); 
// EDO TELIONI

 

}