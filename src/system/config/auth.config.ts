const AuthConfig = () => ({
  jwt_secret_key: process.env.JWT_SECRET_KEY || 'SECRET',
  jwt_expire_time: process.env.JWT_EXPIRE_TIME || '15m',
  jwt_expire_time_value: process.env.JWT_EXPIRE_TIME_VALUE || '15',
  jwt_expire_time_type: process.env.JWT_EXPIRE_TIME_TYPE || 'm',
  jwt_refresh_secret_key:
    process.env.JWT_REFRESH_SECRET_KEY || 'SECRET-REFRESH',
  jwt_refresh_expire_time: process.env.JWT_REFRESH_EXPIRE_TIME || '7D',
  jwt_refresh_expire_time_value:
    process.env.JWT_REFRESH_EXPIRE_TIME_VALUE || '7',
  jwt_refresh_expire_time_type: process.env.JWT_REFRESH_EXPIRE_TIME_TYPE || 'D',
});

export default AuthConfig;
