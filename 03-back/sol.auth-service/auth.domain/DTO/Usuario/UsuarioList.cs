using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace auth.domain.DTO.Usuario
{
    public class UsuarioList
    {
        public Guid IdUsuarioGuid { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
    }
}
