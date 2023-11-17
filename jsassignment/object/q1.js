const fs=require('fs');
const readline=require('readline');
const rd=readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rd.question("Enter the employee ID: ",(empid)=>{
    const parsedEmployeeId=parseInt(empid,10);
    fs.readFile('jsonfile.json','utf8',(err,data)=>{
        if(err){
            console.log("Error reading json file : ",err);
            rd.close();
        }
        try {
            const employeeData = JSON.parse(data);
            const employee = employeeData.employees.find(emp => emp.id === parsedEmployeeId);

            if (employee) {
                const camelCaseFirstName = employee.firstName.charAt(0).toLowerCase() + employee.firstName.slice(1)+employee.lastName;
                //const camelCaseLastName = employee.lastName;//.charAt(0).toLowerCase() + employee.lastName.slice(1);
                console.log(`Employee ID: ${employee.id}`);
                console.log(`Camel Case Name: ${camelCaseFirstName}`);
                //console.log(`Camel Case Last Name: ${camelCaseLastName}`);
                console.log(`Salary: ${employee.salary}`);
            } else {
                console.log('Employee not found.');
            }
        } catch (jsonError) {
            console.error('Error parsing JSON data:', jsonError);
        }
    });
});
