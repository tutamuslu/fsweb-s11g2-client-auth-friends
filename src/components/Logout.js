import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthMenu() {

    let location = useLocation();
    const history = useHistory();

    useEffect(() => { }, [location]);
    let loggedInToken = localStorage.getItem("token");

    const triggerLogout = (e) => {
        localStorage.removeItem("token"); // token siliyoruz ki giriş yapamasın
        history.push("/login");
    };

    return (
        <span>
            {loggedInToken === null ?
                (
                    ""
                )
                :
                (
                    <button
                        onClick={triggerLogout}
                        className="border border-black p-3 bg-black text-white"
                    > Logout </button>
                )}
        </span>
    );
}