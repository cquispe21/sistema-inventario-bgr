

using Microsoft.AspNetCore.Http;

namespace product_service.application.Interfaces
{
    public interface IBase64Service
    {
        Task<string?> GenerateBase64Async(IFormFile file);
    }
}
