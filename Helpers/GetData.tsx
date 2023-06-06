import axios from "axios";
export const fetchData = async (url: any) => {
    const response = await axios.get(url, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjI0YjNjNDNhMjY1NTg0YzMzZWE1NDQ1MDJkNTZiMiIsInN1YiI6IjY0Nzk1NmUyY2Y0YjhiMDE0MThlMjkxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uL1cQcK7kXcvwCkxhsI5ZCLXY49Peyxx57nEs7Mi04g'
        }
    }
    );
    return response;
}