// Tìm kiếm
const formSearch = document.querySelector("[formSearch]");
if (formSearch) {
    let url = new URL(location.href);

    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = event.target.keyword.value;

        if (value) {
            url.searchParams.set("keyword", value);
        }
        else {
            url.searchParams.delete("keyword");
        }

        location.href = url.href;
    })

    // Hiển thị từ khóa mặc định
    const value = url.searchParams.get("keyword");
    if (value) {
        formSearch.keyword.value = value;
    }
}
// Hết Tìm kiếm

// Bộ lọc
const boxFilter = document.querySelector("[box-filter]");
if (boxFilter) {
    let url = new URL(location.href);

    boxFilter.addEventListener("change", () => {
        const value = boxFilter.value;

        if (value) {
            url.searchParams.set("status", value)
        }
        else{
            url.searchParams.delete("status");
        }

        location.href = url.href;
    });

    const statusCurrent = url.searchParams.get("status");
    if(statusCurrent){
        boxFilter.value = statusCurrent;
    }
}
// Hết Bộ lọc

// Phân trang
const listButtonPagination = document.querySelectorAll("[button-pagination]");
if(listButtonPagination.length > 0){
    listButtonPagination.forEach((button) => {
        let url = new URL(location.href);

        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");

            if(page){
                url.searchParams.set("page", page);
            }
            else{
                url.searchParams.delete("page");
            }

            location.href = url.href;
        })

        const pageCurrent = url.searchParams.get("page");
        if(pageCurrent){

        }
    })
}
// Hết Phân trang