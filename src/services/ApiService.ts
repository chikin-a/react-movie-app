import { TabsCategoriesProps } from "../components/Tabs/Tabs";

export const fetchMoviesByPageAndCategory = async (
  page: number,
  category: TabsCategoriesProps
) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${category}/day?page=${page}&language=en-US`,
      // `https://api.themoviedb.org/3/trending//day?page=${page}&language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDc2NzRjZDlhNDk4NDVjMGU0OTdiYmQ0M2IzMWU3MSIsInN1YiI6IjYzYzU1OGFhNWYyYjhkMDBmMGRiNDM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpnprXtR1tXFhnfcmHkYWD1h7ZwlV0ALVq6pYwXLa88",
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
