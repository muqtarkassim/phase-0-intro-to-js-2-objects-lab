const employee={
    breakfast:"eggs",
    lunch:"chapoo",
}
/*const employer={
    salry:2000,
    break:'2months'

}*/

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };

    updatedEmployee[key] = value;

    return updatedEmployee;
}
//console.log(updateEmployeeWithKeyAndValue(employer,'salrys',"canjera"))
//console.log(employer)


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee= {... employee}
    delete updatedEmployee[key]
    return updatedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   const updatedEmployee= delete employee[key]
   return (updatedEmployee,employee);
}
//console.log(deleteFromEmployeeByKey(employer,'salry'))
