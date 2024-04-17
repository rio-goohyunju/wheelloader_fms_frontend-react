import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { siteInitSetting } from "@/api/initializeSetting";
import { SiteAdminFormValue } from "@/components/InitSetting/types";

const useSiteInit = (options?: UseMutationOptions<SiteAdminFormValue, AxiosError, SiteAdminFormValue>) => {
    const fetcher = async (variable: SiteAdminFormValue) => {
        const result = await siteInitSetting(variable);
        return result.data;
    };

    return useMutation({
        mutationFn: fetcher,
        ...options,
    });
};

export default useSiteInit;
