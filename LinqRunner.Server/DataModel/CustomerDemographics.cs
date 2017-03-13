using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class CustomerDemographics
    {
        public CustomerDemographics()
        {
            CustomerCustomerDemo = new List<CustomerCustomerDemo>();
        }

        public string CustomerTypeId { get; set; }
        public string CustomerDesc { get; set; }

        public virtual List<CustomerCustomerDemo> CustomerCustomerDemo { get; set; }
    }
}
