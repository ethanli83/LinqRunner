using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Products
    {
        public Products()
        {
            OrderDetails = new List<OrderDetails>();
        }

        public int ProductId { get; set; }
        public int? CategoryId { get; set; }
        public bool Discontinued { get; set; }
        public string ProductName { get; set; }
        public string QuantityPerUnit { get; set; }
        public short? ReorderLevel { get; set; }
        public int? SupplierId { get; set; }
        public decimal? UnitPrice { get; set; }
        public short? UnitsInStock { get; set; }
        public short? UnitsOnOrder { get; set; }

        public virtual List<OrderDetails> OrderDetails { get; set; }
        public virtual Categories Category { get; set; }
        public virtual Suppliers Supplier { get; set; }
    }
}
