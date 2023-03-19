import { useNavigate } from "react-router-dom";

export default function NoRoute() {

    const navigate = useNavigate();

    return (
        <>
        <h2> Not Found </h2>
        <button onClick={() => navigate(-1)}> Go Back </button>
        </>
    )
}