// pages/DashboardPage.tsx

import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const DashboardPage: React.FC = () => {
    return (
        <div>
            <Image src="/image1.png" alt="Logo" width={300} height={300} />
            <div>
                <Link href="/Component1">
                    <Button variant="contained" color="primary">
                        1
                    </Button>
                </Link>
                <Link href="/Component2">
                    <Button variant="contained" color="primary">
                        2
                    </Button>
                </Link>
                <Link href="/Component3">
                    <Button variant="contained" color="primary">
                        3
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default DashboardPage;
