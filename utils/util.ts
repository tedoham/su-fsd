import path from "path";

export const compareFilenames = (a: string, b: string) => {
    const numPattern = /\d+/g;
    const aMatch = a.match(numPattern);
    const bMatch = b.match(numPattern);
    
    // If both filenames have numbers, compare them as numbers
    if (aMatch && bMatch) {
        const numA = parseInt(aMatch[0], 10);
        const numB = parseInt(bMatch[0], 10);
        if (numA !== numB) return numA - numB;
    }
    
    // If only one filename has a number or if numbers are equal, compare as strings
    return a.localeCompare(b, undefined, { numeric: true });
};


export const getAbsoluteFilePath = (filePath: string) => {
    return path.join(process.cwd(), "public", filePath);
}

export const sortedItems = [
    { name: "createdAt", title: "Sort by created at" },
    { name: "filenameAsc", title: "Sort by name - asc" },
    { name: "filenameDesc", title: "Sort by name - desc" },
];

