﻿using System.Collections.Generic;

namespace LinqRunner.Server.DataModel
{
    public partial class Suppliers
    {
        public Suppliers()
        {
            Products = new List<Products>();
        }

        public int SupplierId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Country { get; set; }
        public string Fax { get; set; }
        public string HomePage { get; set; }
        public string Phone { get; set; }
        public string PostalCode { get; set; }
        public string Region { get; set; }

        public virtual List<Products> Products { get; set; }
    }
}
