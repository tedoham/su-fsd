import { parse } from 'csv-parse';
import path from 'path';

const records = [];

// Initialize the parser
const parser = parse({
  delimiter: ':'
});

// Use the readable stream api to consume records
parser.on('readable', function(){
  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
  }
});
// Catch any error
parser.on('error', function(err){
  console.error(err.message);
});

const getData = () => {

}

const getAbsoluteFilePath = (filePath: string) => {
  return path.join(process.cwd(), "data", filePath);
}