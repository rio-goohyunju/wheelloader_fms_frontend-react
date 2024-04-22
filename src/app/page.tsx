import Link from "next/link";
import Image from "next/image";
import Login from "@/components/Login";
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
                    <Image src="/image 1.png" alt="Logo" width={300} height={300} />
                </div>

                <div style={{ flex: 1, width: "50%" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to Next.js</h1>
                    <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                        Get started by editing <code>pages/index.js</code>
                    </p>
                    <Login />
                </div>
            </div>
        </main>
    );
}
