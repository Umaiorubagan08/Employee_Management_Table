const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const employees = [
  {"id":1,"first_name":"Arjun","last_name":"Kapoor","email":"arjun.kapoor@gmail.com","gender":"Male","Number":"9876543210","Address":"123 Green Street, Mumbai"},
    {"id":2,"first_name":"Meera","last_name":"Nair","email":"meera.nair@yahoo.com","gender":"Female","Number":"8765432109","Address":"45 Sunrise Apartments, Kochi"},
    {"id":3,"first_name":"Rohit","last_name":"Sharma","email":"rohit.sharma@hotmail.com","gender":"Male","Number":"7654321098","Address":"22 Blueberry Lane, Delhi"},
    {"id":4,"first_name":"Aditi","last_name":"Iyer","email":"aditi.iyer@outlook.com","gender":"Female","Number":"6543210987","Address":"89 Palm Road, Chennai"},
    {"id":5,"first_name":"Karan","last_name":"Malhotra","email":"karan.malhotra@gmail.com","gender":"Male","Number":"5432109876","Address":"16 Oakwood Drive, Pune"},
    {"id":6,"first_name":"Priya","last_name":"Singh","email":"priya.singh@yahoo.co.in","gender":"Female","Number":"4321098765","Address":"34 Lotus Towers, Jaipur"},
    {"id":7,"first_name":"Ravi","last_name":"Verma","email":"ravi.verma@rediffmail.com","gender":"Male","Number":"3210987654","Address":"56 Maple Avenue, Bangalore"},
    {"id":8,"first_name":"Ananya","last_name":"Reddy","email":"ananya.reddy@icloud.com","gender":"Female","Number":"2109876543","Address":"78 Jasmine Court, Hyderabad"},
    {"id":9,"first_name":"Deepak","last_name":"Joshi","email":"deepak.joshi@protonmail.com","gender":"Male","Number":"1987654321","Address":"12 Rosewood Villas, Lucknow"},
    {"id":10,"first_name":"Sonal","last_name":"Patel","email":"sonal.patel@hotmail.com","gender":"Female","Number":"9876501234","Address":"90 Meadows, Ahmedabad"},
    {"id":11,"first_name":"Akhil","last_name":"Chopra","email":"akhil.chopra@gmail.com","gender":"Male","Number":"8765402345","Address":"55 Boulevard, Gurgaon"},
    {"id":12,"first_name":"Ishita","last_name":"Gupta","email":"ishita.gupta@yahoo.com","gender":"Female","Number":"7654303456","Address":"29 Lavender Walk, Kolkata"},
    {"id":13,"first_name":"Vikram","last_name":"Das","email":"vikram.das@hotmail.com","gender":"Male","Number":"6543204567","Address":"72 Coral Street, Bhopal"},
    {"id":14,"first_name":"Ritika","last_name":"Sen","email":"ritika.sen@rediffmail.com","gender":"Female","Number":"5432105678","Address":"31 Amber Avenue, Nagpur"},
    {"id":15,"first_name":"Siddharth","last_name":"Bose","email":"siddharth.bose@gmail.com","gender":"Male","Number":"4321006789","Address":"19 Willow Lane, Indore"},
    {"id":16,"first_name":"Nidhi","last_name":"Chowdhury","email":"nidhi.chowdhury@yahoo.co.in","gender":"Female","Number":"3210007890","Address":"64 Ebony Park, Noida"},
    {"id":17,"first_name":"Ramesh","last_name":"Kulkarni","email":"ramesh.kulkarni@rediffmail.com","gender":"Male","Number":"2100008901","Address":"23 Sapphire Square, Surat"},
    {"id":18,"first_name":"Sneha","last_name":"Mishra","email":"sneha.mishra@gmail.com","gender":"Female","Number":"1090009012","Address":"87 Emerald Heights, Thane"},
    {"id":19,"first_name":"Aravind","last_name":"Rao","email":"aravind.rao@hotmail.com","gender":"Male","Number":"1980000123","Address":"15 Diamond Plaza, Patna"},
    {"id":20,"first_name":"Tanya","last_name":"Khan","email":"tanya.khan@icloud.com","gender":"Female","Number":"9870001234","Address":"99 Ruby Terrace, Chandigarh"}
];

// employee data location is given below
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Add a route for "/" to see the backend server is running or not.
app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

// Start the server i used the port 5000 or we can change this port. they are lots of port available we can use anyone this port.
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
