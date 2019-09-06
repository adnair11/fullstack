

let trainers=[
    {id :  1,
     name : "Mohsin",
     Subject : "FSD"
    },
    {id : 2,
     name : "Jibu Kumar",
     Subject : "GBS"
    },
    {id : 3,
     name : "Murali",
     Subject : "GBC"  
    }
     ]



 class trainer{
     constructor(t1,t2)
     {
         this.Name=t1;
         this.subject=t2;
     }
     Name;
     subject;


             }

   mohsin = new trainer("mohsin","fsd");
   jibu =new trainer("jibu kumar","gbs");
   murali=new trainer("murali  ","gbc");


class c{
    id;
    current;



}


    selectshow =()=>
    {
        console.log(parseInt(document.getElementById("cl").value)); 
        if(parseInt(document.getElementById("cl").value)==1)
        show1();
        
        if(parseInt(document.getElementById("cl").value)==2)
        show2();
        
        if(parseInt(document.getElementById("cl").value)==3)
        show3();
        
        // if(document.getElementById("cl")=="2")
        // show();
        // if(document.getElementById("cl")=="3")
        // show();



    }


const show1= () =>{
    console.log("inshow");
                let rows = '';
                // create records
                let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
                
                days.forEach(u =>{
                    rows += `<tr>
                                <td>${u}</td>
                                <td onclick="show2()"> ${mohsin.Name}</td>
                                <td onclick="show2()">${murali.Name}</td>
                                <td onclick="show2()">${jibu.Name}</td>
                                
                            </tr>`;
                });

                

        
            
                let table = `<table>
                                <tr>
                                
                                    <th>DAYS</th>
                                    <th>HOUR1</th>
                                    <th>HOUR2</th>
                                    <th>HOUR3</th>
                                    
                                
                                    
                                </tr>
                                    ${rows}
                            </table>`;
                
                document.getElementById('t').innerHTML = table;
            
}

const show2= () =>{
    console.log("inshow");
                let rows = '';
                // create records
                let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
                
                days.forEach(u =>{
                    rows += `<tr>
                                <td>${u}</td>
                                <td onclick="show3()">${murali.Name}</td>
                                <td onclick="show3()">${jibu.Name}</td>
                                <td onclick="show3()">${mohsin.Name}</td>
                                
                            </tr>`;
                });

                

        
            
                let table = `<table>
                                <tr>
                                
                                    <th>DAYS</th>
                                    <th>HOUR1</th>
                                    <th>HOUR2</th>
                                    <th>HOUR3</th>
                                    
                                
                                    
                                </tr>
                                    ${rows}
                            </table>`;
                
                document.getElementById('t').innerHTML = table;
            
}

const show3= () =>{
    console.log("inshow");
                let rows = '';
                // create records
                let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
                
                days.forEach(u =>{
                    rows += `<tr>
                                <td>${u}</td>
                                <td onclick="show1()">${jibu.Name}</td>
                                <td onclick="show1()">${mohsin.Name}</td>
                                <td onclick="show1()">${murali.Name}</td>
                                
                            </tr>`;
                });

                

        
            
                let table = `<table border='1'>
                                <tr>
                                
                                    <th>DAYS</th>
                                    <th>HOUR1</th>
                                    <th>HOUR2</th>
                                    <th>HOUR3</th>
                                    
                                
                                    
                                </tr>
                                    ${rows}
                            </table>`;
                
                document.getElementById('t').innerHTML = table;
            
}




hello = ()=>
{
    console.log("IM IN")
}