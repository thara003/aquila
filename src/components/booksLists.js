import { useQuery } from "@apollo/client";
import { ALL_BOOKS_QUERY } from "../graphql/queries/book";

function BooksList() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (error) return <div>Error loading Boooks.</div>;
  if (loading) return <div>Loading</div>;

  const { books } = data;

  console.log("data", data.books);

  return <h2>Helo world!</h2>;
}

export default BooksList;