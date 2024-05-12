export function CurrentHTTPError(errorCode: number): string {
  let message: string = "";
  switch (errorCode) {
    case 400:
      message = "There is a problem with request";
      break;

    case 401:
      message = "There is a problem with access token, re log";
      break;

    case 403:
      message = "Action is forbidden for current user";
      break;

    case 404:
      message = "There is no response from server";
      break;
    default:
      message = "There is a server problem";
      break;
  }

  return message;
}
