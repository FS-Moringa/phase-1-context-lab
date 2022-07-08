/* Your Code Here */

const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
  
}
  
  const createEmployeeRecords = (employeeRecords) => {
    return employeeRecords.map(arrayEmp => {
      return createEmployeeRecord(arrayEmp)
    })
  }
  

  function createTimeInEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  
    })
    return this
  }
  

  function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
      
    })
    return this
  }
  

  function hoursWorkedOnDate (dates) {
    const timeIn = this.timeInEvents.find(event => 
       event.date === dates)
  
    const timeOut = this.timeOutEvents.find(event =>
       event.date === dates)
  
    const timeWorked = (timeOut.hour - timeIn.hour) / 100
    return timeWorked
    
  }
  
  
  function wagesEarnedOnDate (date) {
    const timeWorked = hoursWorkedOnDate.call(this, date)
    return timeWorked * this.payPerHour
    // return realWage
  
  }


  const findEmployeeByFirstName = (employees, firstName) => {
    return employees.find(employee => employee.firstName === firstName)
  }

  
  
  const calculatePayroll = (employeeRecord) => {
    return employeeRecord.reduce((total, employee) => {
      return total + allWagesFor.call(employee)
    }, 0)
  
  }



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

