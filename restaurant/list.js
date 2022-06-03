export const fetchRestraSearch = async (search) => {
    const result = await fetch(
        `${process.env.baseApiUrl}/api/store/list?search_item=${search.search_item}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                url:"http://foodadmin.ibyteworkshop.com",
            },
        }
    );
    let response = await result.json();
    if (response.status) {
        return response;
    } else {
        return response;
    }
    }