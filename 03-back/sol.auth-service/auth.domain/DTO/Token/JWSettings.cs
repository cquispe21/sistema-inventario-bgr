using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace auth.domain.DTO.Token
{
    public class JWSettings
    {
        public string SecretKey { get; init; } = null!;

        public int ExpiryMinutes { get; init; }

        public string Issuer { get; init; } = null!;

        public string Audience { get; init; } = null!;

    }
}
