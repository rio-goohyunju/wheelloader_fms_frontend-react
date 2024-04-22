import { Box } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import Header from "../Header";
import MainContainer from "../MainContainer";
import SideHeader from "../SideHeader";
import SideMenu from "../SideMenu";

import MainLayout from ".";
import { MouseEvent } from "react";

type MainLayoutStory = StoryObj<typeof MainLayout>;

export default {
    title: "Components/MainLayout",
    component: MainLayout,
    tags: ["autodocs"],
} as Meta;

export const Basic: MainLayoutStory = {
    args: {},
};

export const Combain = () => (
    <MainLayout>
        <Box m={1} mt={4.5}>
            <SideHeader
                isLogin={false}
                popoverAnchorEl={null}
                handlePopoverOpen={function (event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
                    throw new Error("Function not implemented.");
                }}
                handlePopoverClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                isPopoverOpen={false}
                handleLogout={function (): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
                user={undefined}
            />
            <SideMenu />
        </Box>
    </MainLayout>
);
