namespace product_service.domain.DTO.Pagination
{
    public class PagedResult<T>
    {
        public List<T> Items { get; set; } = new();
        public PaginationMeta Meta { get; set; } = new();
    }

    public class PaginationMeta
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
        public bool HasPrevious { get; set; }
        public bool HasNext { get; set; }
    }
}
