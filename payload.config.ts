import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';


export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    collections: [],
    routes: {
        admin: '/sell',
    },
    editor: slateEditor({}),
    admin: {
        bundler: webpackBundler(),

    },
    rateLimit: {
        max: 2000
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,

    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.d.ts')
    }
});
