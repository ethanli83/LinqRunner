using System;
using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Employees
    {
        public Employees()
        {
            EmployeeTerritories = new List<EmployeeTerritories>();
            Orders = new List<Orders>();
        }

        public int EmployeeId { get; set; }
        public string Address { get; set; }
        public DateTime? BirthDate { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Extension { get; set; }
        public string FirstName { get; set; }
        public DateTime? HireDate { get; set; }
        public string HomePhone { get; set; }
        public string LastName { get; set; }
        public string Notes { get; set; }
        public byte[] Photo { get; set; }
        public string PhotoPath { get; set; }
        public string PostalCode { get; set; }
        public string Region { get; set; }
        public int? ReportsTo { get; set; }
        public float? Salary { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }

        public virtual List<EmployeeTerritories> EmployeeTerritories { get; set; }
        public virtual List<Orders> Orders { get; set; }
        public virtual Employees ReportsToNavigation { get; set; }
        public virtual List<Employees> InverseReportsToNavigation { get; set; }
    }
}
