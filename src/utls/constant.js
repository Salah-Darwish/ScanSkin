import  base64 from 'base-64'; 
export const Token_Key='ScanSkin.Keys.TOKEN';
export const User_Key='ScanSkin.Keys.USER';
export const BASE_URL = 'http://192.168.1.5:7175/api';
 const userName='11167606';
 const Password='60-dayfreetrial'; 
  const credentials = base64.encode(`${userName}:${Password}`);

export const basicAuth = `Basic ${credentials}`;