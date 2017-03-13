using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Territories
    {
        public Territories()
        {
            EmployeeTerritories = new List<EmployeeTerritories>();
        }

        public string TerritoryId { get; set; }
        public int RegionId { get; set; }
        public string TerritoryDescription { get; set; }

        public virtual List<EmployeeTerritories> EmployeeTerritories { get; set; }
        public virtual Region Region { get; set; }
    }
}
