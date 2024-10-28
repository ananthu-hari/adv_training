using AutoMapper;
using AutoMapperDemo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;

namespace AutoMapperDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        //Create a variable to holder mapper instance
        private readonly IMapper _mapper;
        //Framework will inject the instance using Constructor
        public EmployeeController(IMapper mapper)
        {
            //Initialize the variable with the injected mapper instance
            _mapper = mapper;
        }

        private List<Employee> listEmployees = new List<Employee>()
        {
            new Employee(){ Id = 1, Name = "Anurag", Age = 28, Salary=1000, Gender = "Male", Email = "Anurag@Example.com", SocialSecurityNumber="1234@Anurag" },
            new Employee(){ Id = 2, Name = "Pranaya", Age = 30, Salary=2000, Gender = "Male", Email = "Pranaya@Example.com", SocialSecurityNumber="4567@Pranaya" },
        };

        [HttpGet]
        public ActionResult<List<EmployeeDTO>> GetEmployees()
        {
            //When not using automapper
            ////We cannot expose the Sensitive Information
            ////We are going to return the Employees to the Client using EmployeeDTO
            ////So, manually creating instance and mapping the employees from Employee to EmployeeDTO
            //List<EmployeeDTO> employees = new List<EmployeeDTO>();
            //foreach (var employee in listEmployees)
            //{
            //    EmployeeDTO emp = new EmployeeDTO()
            //    {
            //        //Setting the Id, Name, Age, Gender, and Email
            //        Id = employee.Id,
            //        Name = employee.Name,
            //        Age = employee.Age,
            //        Gender = employee.Gender,
            //        Email = employee.Email,
            //    };
            //    employees.Add(emp);
            //}

            // Use AutoMapper to map from Employee to EmployeeDTO
            List<EmployeeDTO> employees = _mapper.Map<List<EmployeeDTO>>(listEmployees);

            return Ok(employees);
        }

        [HttpPost]
        public ActionResult<EmployeeDTO> AddEmployee(EmployeeDTO employee)
        {
            if (employee != null && employee.Id == 0)
            {
                //Whwn not using automapper
                ////Create an Instance of Employee Object and Populate the Properties manually
                //Employee emp = new Employee()
                //{
                //    Id = listEmployees.Count + 1,
                //    Name = employee.Name,
                //    Age = employee.Age,
                //    Gender = employee.Gender,
                //    Email = employee.Email,
                //    Salary = 3000,
                //    SocialSecurityNumber = $"2356@{employee.Name}"
                //};

                // Use AutoMapper to map from EmployeeDTO to Employee
                Employee emp = _mapper.Map<Employee>(employee);

                //Adding Employee Object into the Database
                listEmployees.Add(emp);
                //Setting the Employee ID in EmployeeDTO
                employee.Id = emp.Id;
                //Returning the EmployeeDTO
                return Ok(employee);
            }
            //If the Incoming Data in not Valid Return Bad Request
            return BadRequest();
        }
    }
}