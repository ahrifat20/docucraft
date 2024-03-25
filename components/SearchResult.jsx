import Link from "next/link";

export default function SearchResult({ results, term, closeSearchResult }) {
    console.log(results);
  return (
    <>
      <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
        <p className="!text-lg">
          Showing results for
          <span className="font-semibold">"{term}":</span>
        </p>
        <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
          {results.map((doc) => (
            <li key={doc.id} className="">
              <Link
                href={`/docs/${doc.id}`}
                className="transition-all hover:text-emerald-600"
                onClick={(e) => closeSearchResult(e)}
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
