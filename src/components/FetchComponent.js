import { useEffect } from "react";

export function FetchComponent(apiLink, setData, setRenderState) {
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            fetchData(apiLink);
        }
        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchData(apiLink) {
        const requestOptions = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };
        try {
            const response = await fetch(apiLink, requestOptions).catch(
                (error) => console.log(error)
            );
            if (response.ok) {
                await response
                    .json()
                    .then((jsonData) => {
                        setData(jsonData);
                    })
                    .then(setRenderState(true));
            }
        } finally {
        }
    }
}
