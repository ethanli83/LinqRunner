using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Shippers
    {
        public Shippers()
        {
            Orders = new List<Orders>();
        }

        public int ShipperId { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }

        public virtual List<Orders> Orders { get; set; }
    }
}
