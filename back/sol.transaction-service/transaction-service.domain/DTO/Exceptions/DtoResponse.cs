

namespace transaction_service.domain.DTO.Exceptions
{
    public class DtoResponse
    {
        public DtoResponse()
        {
            Resultado = false;
        }

        public string Message { get; set; }
        public bool Resultado { get; set; }
    }

    public class DtoResponse<T> : DtoResponse
    {
        public T Data { get; set; }
    }
}
