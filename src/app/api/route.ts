import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { parse } from "csv-parse";
import { getAbsoluteFilePath } from "../../../utils/util";
import { NextRequest, NextResponse } from "next/server";

const getData = (): Promise<[string, string][]> => {
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

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const data = await getData();
        return new Response(JSON.stringify({data: data}));
    } catch (error) {
        console.log(error);
    }
}
