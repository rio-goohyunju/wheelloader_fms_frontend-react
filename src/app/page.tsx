import Image from "next/image";
import Login from "@/pages/Login";
import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Home() {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#fff",
            }}
        >
            <div
                style={{
                    width: "700px",
                    height: "350px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <div
                    style={{ flex: "1", width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Image src="/image1.png" alt="Logo" width={300} height={300} />
                </div>

                <div style={{ flex: 1, width: "50%" }}>
                    <Login type={""} />
                </div>
            </div>
        </main>
    );
}
