using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Categories
    {
        public Categories()
        {
            Products = new List<Products>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }

        public virtual List<Products> Products { get; set; }
    }
}
