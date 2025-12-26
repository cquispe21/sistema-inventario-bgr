

using auth.domain.DTO.Exceptions;

namespace auth.domain.DTO.Helpers
{
    public static class CreateResponse
    {
       
            public static DtoResponse<T> Success<T>(T data, string message = "Operación exitosa")
            {
                return new DtoResponse<T>
                {
                    Resultado = true,
                    Data = data,
                    Message = message
                };
            }

            public static DtoResponse Success(string message = "Operación exitosa")
            {
                return new DtoResponse
                {
                    Resultado = true,
                    Message = message
                };
            }

            public static ResponseError Error(string message, int code)
            {
                return new ResponseError(message, code);
            }
        }

    
}
