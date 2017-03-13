using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Region
    {
        public Region()
        {
            Territories = new List<Territories>();
        }

        public int RegionId { get; set; }
        public string RegionDescription { get; set; }

        public virtual List<Territories> Territories { get; set; }
    }
}
