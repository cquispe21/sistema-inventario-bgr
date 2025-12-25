

namespace auth.domain.DTO.Exceptions
{
    public class DtoError
    {
        public int code { get; set; }
        public string message { get; set; }
        public bool error { get; set; }
    }
}
