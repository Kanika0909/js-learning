const jobs = [
    { company: "Google", salary: 100000, status: "Applied" },
    { company: "Amazon", salary: 120000, status: "Interview" },
    { company: "Microsoft", salary: 110000, status: "Rejected" }
]

// 1. Get all companies

// const companies = jobs.map( job =>  job.company)

// console.log(companies);

// 2. Get jobs with salary > 110000

// const companies = jobs.filter( job => job.salary > 110000 )

// console.log(companies);

// 3. Get only Interview Jobs 

// const interviewJobs = jobs.filter( job => job.status === "Interview" )

// console.log(interviewJobs);

// 4. Calculate total salary

// const total = jobs.reduce( (total, job) => {
//     return total + job.salary
// }, 0)

// console.log(total);

// 5. Create an array containing only company names

// const companyNames = jobs.map(job => job.company)
// console.log(companyNames);

