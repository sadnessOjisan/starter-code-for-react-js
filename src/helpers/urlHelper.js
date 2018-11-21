// @flow

import HOST_URL from "../constants/URL";

export const getURL = (path: string): string => `${HOST_URL}${path}`;
