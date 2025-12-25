

using Microsoft.AspNetCore.Http;
using product_service.application.Interfaces;

namespace product_service.infrastructure.Services
{
    public class ImgBase64 : IBase64Service
    {
        public async Task<string?> GenerateBase64Async(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return null;

            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);

            var bytes = memoryStream.ToArray();
            return Convert.ToBase64String(bytes);
        }
    }
}
