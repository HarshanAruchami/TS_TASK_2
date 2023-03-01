//course
class Course{
    public courseID: number;
    public CourseName: string;

    constructor(ID: number, Name: string) {
        this.courseID = ID;
        this.CourseName = Name;
    }

    public courseDetails(): void {
        console.log('Course ID : ' + this.courseID + '\n'+ 'Course Name :'+ this.CourseName);
    }
}
//employee
class Employee extends Course {
    public empID: number;
    public empName: string;
    public empDesignation: string;
    

    constructor(ID: number, Name: string, empid: number ,empname: string, empdes: string) {
        super(ID, Name);

        this.empID = empid;
        this.empName= empname;
        this.empDesignation = empdes;

    }

    public employeedetails(): void {
        super.courseDetails();
        console.log(`EmpID: ${this.empID} \nEmpName: ${this.empName} \nEmpDesignation: ${this.empDesignation} `);
    }
}
//admin
class Admin extends Employee {
    public adminID: number;
    public adminName: string;
    

    constructor(ID: number, Name: string, empid: number ,empname: string, empdes: string, adminid:number, adminname:string) {
        super(ID, Name , empid , empname, empdes);

        this.adminID = adminid;
        this.adminName= adminname;
        

    }

    public adminDetails(): void {
        super.employeedetails();
        console.log(`AdminID: ${this.adminID} \nAdminName: ${this.adminName}`);
    }
}


let c = new Admin (101, 'Typescript', 100 , 'Harshan' , 'Fullstack Dev' , 110, 'Hemanth');
c.adminDetails();