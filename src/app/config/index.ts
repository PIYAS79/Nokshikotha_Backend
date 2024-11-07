
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    db_url: process.env.DB_URL,
    port: process.env.PORT,
    super_admin_email: process.env.SUPER_AdMIN_EMAIL,
    super_admin_pass: process.env.SUPER_ADMIN_PASS,
    client_url: process.env.FRONTEND_URL
}