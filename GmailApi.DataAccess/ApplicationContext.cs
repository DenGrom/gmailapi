using GmailApi.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GmailApi.DataAccess
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() : base("ApplicationDefaultConnection")
        {

        }
        public virtual DbSet<User> Users { get; set; }
    }
}
