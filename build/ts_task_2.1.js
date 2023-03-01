"use strict";
//course
class Course {
    constructor(ID, Name) {
        this.courseID = ID;
        this.CourseName = Name;
    }
    courseDetails() {
        console.log('Course ID : ' + this.courseID + '\n' + 'Course Name :' + this.CourseName);
    }
}
//employee
class Employee extends Course {
    constructor(ID, Name, empid, empname, empdes) {
        super(ID, Name);
        this.empID = empid;
        this.empName = empname;
        this.empDesignation = empdes;
    }
    employeedetails() {
        super.courseDetails();
        console.log(`EmpID: ${this.empID} \nEmpName: ${this.empName} \nEmpDesignation: ${this.empDesignation} `);
    }
}
//admin
class Admin extends Employee {
    constructor(ID, Name, empid, empname, empdes, adminid, adminname) {
        super(ID, Name, empid, empname, empdes);
        this.adminID = adminid;
        this.adminName = adminname;
    }
    adminDetails() {
        super.employeedetails();
        console.log(`AdminID: ${this.adminID} \nAdminName: ${this.adminName}`);
    }
}
let c = new Admin(101, 'Typescript', 100, 'Harshan', 'Fullstack Dev', 110, 'Hemanth');
c.adminDetails();
