import { useEffect } from "react";
import FavoriteList from "../components/FavoriteList";

export default function Favorites() {
    // metadata/doc title
    useEffect(() => {
        document.title = "TheMeal | Favorites";
        
        return () => {
            document.title = "The Meal";
        };
    }, []);
    return (
        <FavoriteList />
    )
}