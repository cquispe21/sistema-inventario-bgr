

namespace product_service.domain.DTO.Exceptions
{
    public class BaseCustomException : Exception
    {
        public int Code { get; }
        public override string StackTrace { get; }
        public BaseCustomException(string message, string stackTrace, int code) : base(message)
        {
            Code = code;
            StackTrace = stackTrace;
        }
    }
}
