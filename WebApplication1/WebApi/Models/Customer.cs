using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Customer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [Column(TypeName="nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string ImageUrl { get; set; }

        public DateTime BirthDate { get; set; }

        public decimal Height { get; set; }

        public decimal Rating { get; set; }
    }
}
