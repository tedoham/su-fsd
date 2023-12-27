"use client";

import { useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import SortComponent from "@/components/SortComponent";
import DataComponent from "@/components/DataComponent";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import useSWR from "swr";
import { compareFilenames } from "../../utils/util";


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Home() {
  const [sortBy, setSortBy] = useState("createdAt");
  const { data, error } = useSWR<{ data: [string, string][] }>("/api", fetcher);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const processedData = useMemo(() => {
    // Check if the data is in the expected format
    if (!data || !Array.isArray(data.data)) {
      return [];
    }
  
    // Transform the data into an array of objects
    return data.data.map(([createdAt, filename]) => ({
      createdAt,
      filename,
    }));
  }, [data]);

  
  const sortedData = useMemo(() => {

    if (!Array.isArray(processedData)) return [];
  
    return [...processedData].sort((a, b) => {
      switch (sortBy) {
        case 'createdAtAsc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'filenameAsc':
        return compareFilenames(a.filename, b.filename);
      case 'filenameDesc':
        return compareFilenames(b.filename, a.filename);
        default:
          return 0;
      }
    });
  }, [processedData, sortBy]);
  

  if (error) return <Box><Typography variant="h4">Failed to Load Data</Typography></Box>;
  if (!data) return <Box><LoadingSkeleton /></Box>;

  return (
    <main>
      <Box>
        <Box sx={{ mx: 20, my: 5 }}>
          <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4">
            Data Fetching & Data Sorting CSV data
          </Typography>
          <SortComponent sortBy={sortBy} handleItemChange={handleChange} />
          <DataComponent data={sortedData} />
        </Box>
      </Box>
    </main>
  );
}

