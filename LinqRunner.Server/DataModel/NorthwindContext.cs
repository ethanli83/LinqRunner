using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LinqRunner.Server.DataModel
{
    public partial class NorthwindContext : DbContext
    {
        private readonly string _connectionString;

        public NorthwindContext(string connectionString)
        {
            _connectionString = connectionString + "database=northwind;";
        }

        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<CustomerCustomerDemo> CustomerCustomerDemo { get; set; }
        public virtual DbSet<CustomerDemographics> CustomerDemographics { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<EmployeeTerritories> EmployeeTerritories { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<OrderDetails> OrderDetails { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<Shippers> Shippers { get; set; }
        public virtual DbSet<Suppliers> Suppliers { get; set; }
        public virtual DbSet<Territories> Territories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categories>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK_Categories");

                entity.HasIndex(e => e.CategoryName)
                    .HasName("CategoryName");

                entity.Property(e => e.CategoryId)
                    .HasColumnName("CategoryID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnType("varchar(15)");

                entity.Property(e => e.Description).HasColumnType("mediumtext");
            });

            modelBuilder.Entity<CustomerCustomerDemo>(entity =>
            {
                entity.HasKey(e => new { e.CustomerId, e.CustomerTypeId })
                    .HasName("PK_CustomerCustomerDemo");

                entity.HasIndex(e => e.CustomerTypeId)
                    .HasName("FK_CustomerCustomerDemo");

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CustomerID")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.CustomerTypeId)
                    .HasColumnName("CustomerTypeID")
                    .HasColumnType("varchar(10)");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerCustomerDemo)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_CustomerCustomerDemo_Customers");

                entity.HasOne(d => d.CustomerType)
                    .WithMany(p => p.CustomerCustomerDemo)
                    .HasForeignKey(d => d.CustomerTypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_CustomerCustomerDemo");
            });

            modelBuilder.Entity<CustomerDemographics>(entity =>
            {
                entity.HasKey(e => e.CustomerTypeId)
                    .HasName("PK_CustomerDemographics");

                entity.Property(e => e.CustomerTypeId)
                    .HasColumnName("CustomerTypeID")
                    .HasColumnType("varchar(10)");

                entity.Property(e => e.CustomerDesc).HasColumnType("mediumtext");
            });

            modelBuilder.Entity<Customers>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK_Customers");

                entity.HasIndex(e => e.City)
                    .HasName("City");

                entity.HasIndex(e => e.CompanyName)
                    .HasName("CompanyName");

                entity.HasIndex(e => e.PostalCode)
                    .HasName("PostalCode");

                entity.HasIndex(e => e.Region)
                    .HasName("Region");

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CustomerID")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.Address).HasColumnType("varchar(60)");

                entity.Property(e => e.City).HasColumnType("varchar(15)");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnType("varchar(40)");

                entity.Property(e => e.ContactName).HasColumnType("varchar(30)");

                entity.Property(e => e.ContactTitle).HasColumnType("varchar(30)");

                entity.Property(e => e.Country).HasColumnType("varchar(15)");

                entity.Property(e => e.Fax).HasColumnType("varchar(24)");

                entity.Property(e => e.Phone).HasColumnType("varchar(24)");

                entity.Property(e => e.PostalCode).HasColumnType("varchar(10)");

                entity.Property(e => e.Region).HasColumnType("varchar(15)");
            });

            modelBuilder.Entity<EmployeeTerritories>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.TerritoryId })
                    .HasName("PK_EmployeeTerritories");

                entity.HasIndex(e => e.TerritoryId)
                    .HasName("FK_EmployeeTerritories_Territories");

                entity.Property(e => e.EmployeeId)
                    .HasColumnName("EmployeeID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TerritoryId)
                    .HasColumnName("TerritoryID")
                    .HasColumnType("varchar(20)");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeTerritories)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_EmployeeTerritories_Employees");

                entity.HasOne(d => d.Territory)
                    .WithMany(p => p.EmployeeTerritories)
                    .HasForeignKey(d => d.TerritoryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_EmployeeTerritories_Territories");
            });

            modelBuilder.Entity<Employees>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK_Employees");

                entity.HasIndex(e => e.LastName)
                    .HasName("LastName");

                entity.HasIndex(e => e.PostalCode)
                    .HasName("PostalCode");

                entity.HasIndex(e => e.ReportsTo)
                    .HasName("FK_Employees_Employees");

                entity.Property(e => e.EmployeeId)
                    .HasColumnName("EmployeeID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Address).HasColumnType("varchar(60)");

                entity.Property(e => e.BirthDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasColumnType("varchar(15)");

                entity.Property(e => e.Country).HasColumnType("varchar(15)");

                entity.Property(e => e.Extension).HasColumnType("varchar(4)");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnType("varchar(10)");

                entity.Property(e => e.HireDate).HasColumnType("datetime");

                entity.Property(e => e.HomePhone).HasColumnType("varchar(24)");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.Notes)
                    .IsRequired()
                    .HasColumnType("mediumtext");

                entity.Property(e => e.PhotoPath).HasColumnType("varchar(255)");

                entity.Property(e => e.PostalCode).HasColumnType("varchar(10)");

                entity.Property(e => e.Region).HasColumnType("varchar(15)");

                entity.Property(e => e.ReportsTo).HasColumnType("int(11)");

                entity.Property(e => e.Title).HasColumnType("varchar(30)");

                entity.Property(e => e.TitleOfCourtesy).HasColumnType("varchar(25)");

                entity.HasOne(d => d.ReportsToNavigation)
                    .WithMany(p => p.InverseReportsToNavigation)
                    .HasForeignKey(d => d.ReportsTo)
                    .HasConstraintName("FK_Employees_Employees");
            });

            modelBuilder.Entity<OrderDetails>(entity =>
            {
                entity.HasKey(e => new { e.OrderId, e.ProductId })
                    .HasName("PK_Order Details");

                entity.ToTable("Order Details");

                entity.HasIndex(e => e.ProductId)
                    .HasName("FK_Order_Details_Products");

                entity.Property(e => e.OrderId)
                    .HasColumnName("OrderID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ProductId)
                    .HasColumnName("ProductID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Discount)
                    .HasColumnType("double(8,0)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.Quantity)
                    .HasColumnType("smallint(2)")
                    .HasDefaultValueSql("1");

                entity.Property(e => e.UnitPrice)
                    .HasColumnType("decimal(10,4)")
                    .HasDefaultValueSql("0.0000");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Order_Details_Orders");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Order_Details_Products");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PK_Orders");

                entity.HasIndex(e => e.CustomerId)
                    .HasName("FK_Orders_Customers");

                entity.HasIndex(e => e.EmployeeId)
                    .HasName("FK_Orders_Employees");

                entity.HasIndex(e => e.OrderDate)
                    .HasName("OrderDate");

                entity.HasIndex(e => e.ShipPostalCode)
                    .HasName("ShipPostalCode");

                entity.HasIndex(e => e.ShipVia)
                    .HasName("FK_Orders_Shippers");

                entity.HasIndex(e => e.ShippedDate)
                    .HasName("ShippedDate");

                entity.Property(e => e.OrderId)
                    .HasColumnName("OrderID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CustomerID")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.EmployeeId)
                    .HasColumnName("EmployeeID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Freight)
                    .HasColumnType("decimal(10,4)")
                    .HasDefaultValueSql("0.0000");

                entity.Property(e => e.OrderDate).HasColumnType("datetime");

                entity.Property(e => e.RequiredDate).HasColumnType("datetime");

                entity.Property(e => e.ShipAddress).HasColumnType("varchar(60)");

                entity.Property(e => e.ShipCity).HasColumnType("varchar(15)");

                entity.Property(e => e.ShipCountry).HasColumnType("varchar(15)");

                entity.Property(e => e.ShipName).HasColumnType("varchar(40)");

                entity.Property(e => e.ShipPostalCode).HasColumnType("varchar(10)");

                entity.Property(e => e.ShipRegion).HasColumnType("varchar(15)");

                entity.Property(e => e.ShipVia).HasColumnType("int(11)");

                entity.Property(e => e.ShippedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_Orders_Customers");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK_Orders_Employees");

                entity.HasOne(d => d.ShipViaNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ShipVia)
                    .HasConstraintName("FK_Orders_Shippers");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PK_Products");

                entity.HasIndex(e => e.CategoryId)
                    .HasName("FK_Products_Categories");

                entity.HasIndex(e => e.ProductName)
                    .HasName("ProductName");

                entity.HasIndex(e => e.SupplierId)
                    .HasName("FK_Products_Suppliers");

                entity.Property(e => e.ProductId)
                    .HasColumnName("ProductID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CategoryId)
                    .HasColumnName("CategoryID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Discontinued)
                    .HasColumnType("bit(1)")
                    .HasDefaultValueSql("b'0'");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasColumnType("varchar(40)");

                entity.Property(e => e.QuantityPerUnit).HasColumnType("varchar(20)");

                entity.Property(e => e.ReorderLevel)
                    .HasColumnType("smallint(2)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SupplierID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UnitPrice)
                    .HasColumnType("decimal(10,4)")
                    .HasDefaultValueSql("0.0000");

                entity.Property(e => e.UnitsInStock)
                    .HasColumnType("smallint(2)")
                    .HasDefaultValueSql("0");

                entity.Property(e => e.UnitsOnOrder)
                    .HasColumnType("smallint(2)")
                    .HasDefaultValueSql("0");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Products_Categories");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.SupplierId)
                    .HasConstraintName("FK_Products_Suppliers");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.Property(e => e.RegionId)
                    .HasColumnName("RegionID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.RegionDescription)
                    .IsRequired()
                    .HasColumnType("varchar(50)");
            });

            modelBuilder.Entity<Shippers>(entity =>
            {
                entity.HasKey(e => e.ShipperId)
                    .HasName("PK_Shippers");

                entity.Property(e => e.ShipperId)
                    .HasColumnName("ShipperID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnType("varchar(40)");

                entity.Property(e => e.Phone).HasColumnType("varchar(24)");
            });

            modelBuilder.Entity<Suppliers>(entity =>
            {
                entity.HasKey(e => e.SupplierId)
                    .HasName("PK_Suppliers");

                entity.HasIndex(e => e.CompanyName)
                    .HasName("CompanyName");

                entity.HasIndex(e => e.PostalCode)
                    .HasName("PostalCode");

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SupplierID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Address).HasColumnType("varchar(60)");

                entity.Property(e => e.City).HasColumnType("varchar(15)");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnType("varchar(40)");

                entity.Property(e => e.ContactName).HasColumnType("varchar(30)");

                entity.Property(e => e.ContactTitle).HasColumnType("varchar(30)");

                entity.Property(e => e.Country).HasColumnType("varchar(15)");

                entity.Property(e => e.Fax).HasColumnType("varchar(24)");

                entity.Property(e => e.HomePage).HasColumnType("mediumtext");

                entity.Property(e => e.Phone).HasColumnType("varchar(24)");

                entity.Property(e => e.PostalCode).HasColumnType("varchar(10)");

                entity.Property(e => e.Region).HasColumnType("varchar(15)");
            });

            modelBuilder.Entity<Territories>(entity =>
            {
                entity.HasKey(e => e.TerritoryId)
                    .HasName("PK_Territories");

                entity.HasIndex(e => e.RegionId)
                    .HasName("FK_Territories_Region");

                entity.Property(e => e.TerritoryId)
                    .HasColumnName("TerritoryID")
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.RegionId)
                    .HasColumnName("RegionID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TerritoryDescription)
                    .IsRequired()
                    .HasColumnType("varchar(50)");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.Territories)
                    .HasForeignKey(d => d.RegionId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Territories_Region");
            });
        }
    }
}