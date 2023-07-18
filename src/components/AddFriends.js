import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AxiosWithAuth } from "./AxiosWithAuth";

function AddFriends() {
    const [data, setData] = useState({
        name: "",
        email: "",
    });

    function handleChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        AxiosWithAuth()
            .post("api/friends", data)
            .then((res) => {
                console.log(JSON.stringify(res));
                setData({ name: "", email: "" });
                history.push("/friendlist");
            })
            .catch((err) => {
                console.log(err.response.data.error);
                setData({ name: "", email: "" });
            });
    }
    return (
        <>
            <h1 className="flex font-extrabold text-5xl justify-center mt-11">
                ADD FRIEND
            </h1>
            <form
                className="flex flex-col gap-5 text-center mt-5 w-1/4 mx-auto"
                onSubmit={handleSubmit}
            >
                <label className="">
                    NAME:
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="p-1 ml-2 border border-black bg-black text-white"
                    />
                </label>
                <label className="">
                    EMAIL:
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="p-1 ml-2 border border-black bg-black text-white"
                    />
                </label>
                <button
                    type="submit"
                    className="border border-black bg-black text-white p-1"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default AddFriends;