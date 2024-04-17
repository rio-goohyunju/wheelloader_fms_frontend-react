import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useAuthContext } from "../../hooks/constate/AuthContext";

const useWebSocket = <T>(wsUrl: string) => {
    const [responseData, setResponseData] = useState<T | null>(null);
    const { siteID } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        if (!siteID || !user) {
            return;
        }

        const ws = new WebSocket(wsUrl);

        ws.binaryType = "arraybuffer";

        ws.onopen = () => {
            console.log("WebSocket is connected.");
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data as string);
                setResponseData(data as T);
            } catch (error) {
                console.error("Failed to parse event data:", error);
            }
        };
        ws.onclose = () => {
            console.log("WebSocket is closed.");
        };

        ws.onerror = () => {
            console.log("WebSocket Error");
        };

        return () => {
            ws.close();
        };
    }, [siteID, user]);

    return responseData;
};

export default useWebSocket;
