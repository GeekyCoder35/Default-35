//---------1 constructor function syntax method-----------
var Employee = function(empName, empBday, esal){
    this.empName = empName
    this.empBday = empBday
    this.empsal = esal

    this.displayEmpinfo = function()
    {
        return "Name: " + this.empName + " Emp bday: " + this.empBday + " Emp salary: " + this.displayEmpSal();
    }

    //var asal = displayEmpSal();

    this.displayEmpSal = function()
    {
        return this.empsal*12
    }
}

var emp1 = new Employee("Soumyadeep", "25/12/1999", 26496);
//console.log(emp1.displayEmpinfo())

//Object inheritance using .prtotype
function Manager(dName, comm){
    this.deptName = dName
    this.comm = comm

    this.MgrInfo = function(){
        return this.displayEmpinfo() + "Manager's dept name: "+this.deptName;
    }

    this.MgrSal = function(){
        return this.displayEmpSal() + this.comm*12;
    }
}

Manager.prototype = new Employee("Akash", "3/3/1995", 65000);
var Akash = new Manager("FS", 35000);

//console.log(Akash.MgrInfo() + " and salary: "+Akash.MgrSal());

//Object inheritance using __proto__
var Akash = {
    MgrComm: 15000,
    MgrDept: "FS",
    MgrInfo:function(){
        return this.displayEmpinfo() + "Manager's dept name: "+this.MgrDept;
    },
    MgrSal: function(){
        return this.displayEmpSal() + this.MgrComm*12;
    }
}

Akash.__proto__ = emp1
console.log(Akash.MgrInfo() + "Total salary: "+Akash.MgrSal());