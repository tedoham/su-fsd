import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { parse } from "csv-parse";

export const getAbsoluteFilePath = (filePath: string) => {
    return path.join(process.cwd(), "public", filePath);
}

export const getData = (): Promise<[string, string][]> => {
    return new Promise((resolve, reject) => {
        const records: [string, string][] = [];

        fs.createReadStream(getAbsoluteFilePath("data.csv"))
        .pipe(parse({delimiter: ';'}))
        .on('data', function(csvrow) {
            records.push(csvrow);
        })
        .on('end',function() {
        resolve(records)
        })
        .on('error', function(err) {
            reject(err)
        });
    });
}

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await getData();
        return new Response(JSON.stringify({data: data}));
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
