import client from "../client";
import {
    AddSmsOptionParams,
    AddSmsSettingParams,
    AddSmtpOptionParams,
    AddSmtpSettingParams,
    DeleteSmsSettingParams,
    DeleteSmtpSettingParams,
    EnabledSmsSettingTestParams,
    EnabledSmtpSettingTestParams,
    FetchSmsOptionParams,
    FetchSmsSettingsParams,
    FetchSmtpOptionParams,
    FetchSmtpSettingsParams,
    TestSmsSettingParams,
    TestSmtpSettingParams,
    UpdateSmsOptionParams,
    UpdateSmsSettingParams,
    UpdateSmtpOptionParams,
    UpdateSmtpSettingEnableParams,
    UpdateSmtpSettingParams,
} from "./types";

export const fetchSmsSettings = (params: FetchSmsSettingsParams) => {
    return client.get(`/system-setting/sms?site_id=${params.siteID}`);
};

export const addSmsSetting = (params: AddSmsSettingParams) => {
    return client.post(`/system-setting/sms?site_id=${params.siteID}`, {
        data: {
            agency: params.agency,
            alias: params.alias,
            api_key: params.api_key,
            enable: params.enable,
            phone_number: params.phone_number.replace(/-/g, ""),
        },
    });
};

export const deleteSmsSetting = (params: DeleteSmsSettingParams) => {
    return client.delete(`/system-setting/sms/${params.id}`);
};

export const updateSmsSetting = (params: UpdateSmsSettingParams) => {
    return client.put(`/system-setting/sms/${params.id}`, {
        data: {
            agency: params.agency ?? "",
            alias: params.alias,
            api_key: params.api_key ?? "",
            enable: params.enable,
            phone_number: params.phone_number.replace(/-/g, ""),
        },
    });
};

export const testSmsSetting = (params: TestSmsSettingParams) => {
    return client.post(`/system-setting/sms/test`, {
        data: {
            agency: params.agency,
            api_key: params.api_key,
            enable: params.enable,
            phone_number: params.phone_number.replace(/-/g, ""),
            test_content: params.test_content,
            test_phone_number: params.test_phone_number.replace(/-/g, ""),
        },
    });
};

export const enabledSmsSettingTest = (params: EnabledSmsSettingTestParams) => {
    return client.post(`/system-setting/sms/alarm/${params.siteID}`, {
        data: {
            recipients: params.recipients,
            message: params.message,
        },
    });
};

export const fetchSmtpSettings = (params: FetchSmtpSettingsParams) => {
    return client.get(`/system-setting/smtp?site_id=${params.siteID}`);
};

export const fetchEnableSmtpSetting = (params: FetchSmtpSettingsParams) => {
    return client.get(`/system-setting/smtp/enabled/${params.siteID}`);
};

export const addSmtpSetting = (params: AddSmtpSettingParams) => {
    return client.post(`/system-setting/smtp?site_id=${params.siteID}`, {
        data: {
            alias: params.alias,
            host: params.host,
            account_id: params.account_id,
            account_password: params.account_password,
            enable: params.enable,
            port: Number(params.port),
        },
    });
};

export const deleteSmtpSetting = (params: DeleteSmtpSettingParams) => {
    return client.delete(`/system-setting/smtp/${params.id}`);
};

export const updateSmtpSetting = (params: UpdateSmtpSettingParams) => {
    return client.put(`/system-setting/smtp/${params.id}`, {
        data: {
            alias: params.alias,
            account_id: params.account_id,
            account_password: params.account_password,
            enable: params.enable,
        },
    });
};

export const updateSmtpSettingEnable = (params: UpdateSmtpSettingEnableParams) => {
    return client.patch(`/system-setting/smtp/${params.siteID}`, {
        data: {
            config_id: params.id,
            enable: params.enable,
        },
    });
};

export const testSmtpSetting = (params: TestSmtpSettingParams) => {
    return client.post(`/system-setting/smtp/test`, {
        data: {
            account_id: params.account_id,
            account_password: params.account_password,
            host: params.host,
            port: Number(params.port),
            test_recipient: params.test_recipient,
        },
    });
};

export const enabledSmtpSettingTest = (params: EnabledSmtpSettingTestParams) => {
    return client.post(`/system-setting/smtp/alarm/${params.siteID}`, {
        data: {
            recipient: params.recipient,
        },
    });
};

export const fetchSmsOption = (params: FetchSmsOptionParams) => {
    return client.get(`/system-setting/sms-option?site_id=${params.siteID}`);
};

export const addSmsOption = (params: AddSmsOptionParams) => {
    return client.post(`/system-setting/sms-option`, {
        data: {
            setting_time: params.setting_time,
            site_id: params.siteID,
        },
    });
};

export const updateSmsOption = (params: UpdateSmsOptionParams) => {
    return client.put(`/system-setting/sms-option/${params.id}`, {
        data: {
            setting_time: params.setting_time,
            site_id: params.siteID,
        },
    });
};

export const fetchSmtpOption = (params: FetchSmtpOptionParams) => {
    return client.get(`/system-setting/smtp-option?site_id=${params.siteID}`);
};

export const addSmtpOption = (params: AddSmtpOptionParams) => {
    return client.post(`/system-setting/smtp-option`, {
        data: {
            setting_time: params.setting_time,
            site_id: params.siteID,
            method: params.method,
        },
    });
};

export const updateSmtpOption = (params: UpdateSmtpOptionParams) => {
    return client.put(`/system-setting/smtp-option/${params.id}`, {
        data: {
            setting_time: params.setting_time,
            site_id: params.siteID,
            method: params.method,
        },
    });
};
