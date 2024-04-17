import client from "../client";

import {
    DeviceHubTestParams,
    SiteInitSettingParams,
    SiteUserInitSettingParams,
    SmsTestParams,
    SmtpTestParams,
    SystemInitSettingParams,
} from "./types";

export const smsTest = (params: SmsTestParams) => {
    return client.post(`/system-setting/sms/test`, {
        data: {
            agency: params.agency,
            api_key: params.apiKey,
            enable: true,
            phone_number: params.senderPhoneNumber.replace(/-/g, ""),
            test_content: params.testContent,
            test_phone_number: params.testRecipientPhoneNumber.replace(/-/g, ""),
        },
    });
};

export const smtpTest = (params: SmtpTestParams) => {
    return client.post(`/system-setting/smtp/test`, {
        data: {
            host: params.address,
            account_id: params.id,
            account_password: params.password,
            enable: true,
            port: parseInt(params.port, 10),
            test_recipient: params.testEmailRecipient,
        },
    });
};

export const deviceTest = (params: DeviceHubTestParams) => {
    return client.post(`/device-hub/test/${params.ticketID}`, {
        data: {
            address: params.deviceIP,
            api_token: params.deviceToken,
            account_id: params.deviceID,
            account_password: params.devicePW,
            serial_number: params.deviceSerialNumber,
        },
    });
};

export const systemInitSetting = (params: SystemInitSettingParams) => {
    return client.post(`/admin/initialize`, {
        data: {
            user: {
                password: params.user.newPassword,
            },
            site: {
                name: params.system.systemName,
            },
            sms: {
                alias: params.sms.alias,
                phone_number: params.sms.senderPhoneNumber.replace(/-/g, ""),
                agency: params.sms.agency,
                api_key: params.sms.apiKey,
                enable: true,
            },
            smtp: {
                alias: params.smtp.alias,
                host: params.smtp.address,
                account_id: params.smtp.id,
                account_password: params.smtp.password,
                port: parseInt(params.smtp.port, 10),
                enable: true,
            },
        },
    });
};

export const siteInitSetting = (params: SiteInitSettingParams) => {
    const formData = new FormData();

    formData.append("logo_photo", params.site.logoPhoto);
    formData.append("serial_number", params.deviceHub.deviceSerialNumber);
    formData.append("address", params.deviceHub.deviceIP);
    formData.append("account_id", params.deviceHub.deviceID);
    formData.append("account_password", params.deviceHub.devicePW);
    formData.append("api_token", params.deviceHub.deviceToken);

    return client.post(`/site/initialize/${params.ticketID}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const siteUserInitSetting = (params: SiteUserInitSettingParams) => {
    const formData = new FormData();

    formData.append("name", params.name);
    formData.append("password", params.password);
    formData.append("profile_photo", params.profilePhoto);
    formData.append("department", params.department);
    formData.append("position", params.position);
    formData.append("phone_number", params.phoneNumber.replace(/-/g, ""));

    return client.post(`/user/initialize`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
