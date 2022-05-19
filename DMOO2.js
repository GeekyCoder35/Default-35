//---------1 inline syntax method-----------
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
console.log(emp1.displayEmpinfo())