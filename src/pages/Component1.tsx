import * as React from "react";
import { Box, Typography } from "@mui/material";
import { FormBox } from "@/components/Common/FormBox";

const Component1: React.FC = () => {
    return (
        <FormBox sx={{ marginTop: "2rem" }}>
            <Typography variant="h1" component="h1">
                Component 1
            </Typography>
            <Typography variant="body1">This is Component 1 content.</Typography>
        </FormBox>
    );
};

export default Component1;
