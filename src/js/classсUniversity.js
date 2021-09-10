export default class  University{
    students = [];
    studentsRate = [];

    constructor(name) {

        this.name = name;
    }
    addStudents (arrStudents){
       arrStudents.forEach( student => {

        if ( student.ratingPoint >= 800) {

            let sumBull =  student.ratingPoint + student.schoolPoint;

            if( sumBull >= 2000 ){

                this.studentsRate.push(student);

            } else {

                this.students.push(student);

            } 
            
        } else {
            this.students.push(student);
        }
    });
};
addStudent(student){

    if( student.ratingPoint >= 800) {

        let sumBull =  student.ratingPoint + student.schoolPoint;

        if ( sumBull >= 2000 ){

            this.studentsRate.push(student);

        } else {

            this.students.push(student);

        } 
    }
};

getAllStdudents(){
    return this.students;
};
getBestStudents(){
    return this.studentsRate;
}
}