class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Bodrunessa School";
    }
    
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(15, "Lamia");

console.log(student1, student2);