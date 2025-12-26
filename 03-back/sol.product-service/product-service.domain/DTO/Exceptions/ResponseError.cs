

namespace product_service.domain.DTO.Exceptions
{
    public class ResponseError : BaseCustomException
    {
        public new int Code { get; } 
        public ResponseError(string message,int code)
        : base(message, "ResponseError", code)
        {
        }
    }
}
